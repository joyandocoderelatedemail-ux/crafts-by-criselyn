"use client"

import React, { Suspense, useEffect, useMemo, useRef, useState, createContext, useContext } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  Html,
  Plane,
  Sphere,
} from "@react-three/drei"
import { Download, Heart, X, MessageCircle } from "lucide-react"

/**
 * Single-file Stellar Card Gallery
 * - Context, Starfield, Galaxy, FloatingCard, Modal, and Page in one.
 */

/* =========================
   Card Context (inlined)
   ========================= */

export type Card = {
  id: string
  imageUrl: string
  alt: string
  title: string
}

type CardContextType = {
  selectedCard: Card | null
  setSelectedCard: (card: Card | null) => void
  cards: Card[]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

function useCard() {
  const ctx = useContext(CardContext)
  if (!ctx) throw new Error("useCard must be used within CardProvider")
  return ctx
}

const DEFAULT_CROCHET_CARDS: Card[] = [
  { id: "1", imageUrl: "/images/bouquets/blush-crimson-elegance.jpg", alt: "Blush & Crimson Elegance", title: "Blush & Crimson Elegance" },
  { id: "2", imageUrl: "/images/bouquets/805935975_1115321080954920_7430173126201148166_n.jpg", alt: "Royal Sapphire Blue Roses", title: "Royal Sapphire Blue Roses" },
  { id: "3", imageUrl: "/images/bouquets/sunshine-tulip-harmony.jpg", alt: "Sunshine & Tulip Harmony", title: "Sunshine & Tulip Harmony" },
  { id: "4", imageUrl: "/images/bouquets/763225864_1724302835283527_8842138353643448691_n.jpg", alt: "Butterfly Pink Rose Bloom", title: "Butterfly Pink Rose Bloom" },
  { id: "5", imageUrl: "/images/bouquets/804443036_1114445737815133_7833349134634248746_n.jpg", alt: "Crimson & Black Graduation", title: "Crimson & Black Graduation" },
  { id: "6", imageUrl: "/images/bouquets/760241524_1576993373799403_1562439863125145408_n.jpg", alt: "Sunny Meadow Sunflower", title: "Sunny Meadow Sunflower" },
  { id: "7", imageUrl: "/images/bouquets/808905813_28486514167645545_416009999600940405_n.webp", alt: "Velvet Burgundy Lily", title: "Velvet Burgundy Lily" },
  { id: "8", imageUrl: "/images/bouquets/806247977_1065161509777220_1550624903982517790_n.jpg", alt: "Lilac Dream & Pink Lily", title: "Lilac Dream & Pink Lily" },
  { id: "9", imageUrl: "/images/bouquets/804955044_1614120980377735_3442362483624062589_n.jpg", alt: "Vintage Newspaper Sunflower", title: "Vintage Newspaper Sunflower" },
  { id: "10", imageUrl: "/images/bouquets/midnight-scarlet-roses.jpg", alt: "Midnight Scarlet Roses", title: "Midnight Scarlet Roses" },
  { id: "11", imageUrl: "/images/bouquets/805728796_3931231197171782_4624042147115725325_n.jpg", alt: "Prosperity Money Bouquet", title: "Prosperity Money Bouquet" },
  { id: "12", imageUrl: "/images/bouquets/687680395_826778973388780_3638398839871581678_n.webp", alt: "Lavender Daisy Cluster", title: "Lavender Daisy Cluster" },
  { id: "13", imageUrl: "/images/bouquets/808189951_1094674856875528_4331855208219896247_n.jpg", alt: "Lavender Lily & Pearls", title: "Lavender Lily & Pearls" },
  { id: "14", imageUrl: "/images/bouquets/811235692_4282702331861720_254657277041024819_n.jpg", alt: "Single Stem Mini Favors", title: "Single Stem Mini Favors" },
  { id: "15", imageUrl: "/images/bouquets/805482668_1391583926481097_228339006750819565_n.jpg", alt: "Crochet Flower Charms", title: "Crochet Flower Charms" },
  { id: "16", imageUrl: "/images/bouquets/rose-bloom-arrangement.jpg", alt: "Rosé Bloom Arrangement", title: "Rosé Bloom Arrangement" },
  { id: "17", imageUrl: "/images/bouquets/811102044_1044120755290885_9165327175592266113_n.jpg", alt: "Rainbow Flower Keyrings", title: "Rainbow Flower Keyrings" },
  { id: "18", imageUrl: "/images/bouquets/687905524_25111104528587418_1615018643617862744_n.webp", alt: "Sweet Daisy & Red Ribbon", title: "Sweet Daisy & Red Ribbon" },
  { id: "19", imageUrl: "/images/bouquets/806335695_1543372070896106_5675711324664989767_n.jpg", alt: "Plush Daisy Garden Wrap", title: "Plush Daisy Garden Wrap" },
  { id: "20", imageUrl: "/images/bouquets/blush-crimson-elegance.jpg", alt: "Artisan Bouquet Collection", title: "Artisan Bouquet Collection" },
]

function CardProvider({
  children,
  customCards,
}: {
  children: React.ReactNode
  customCards?: Card[]
}) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const cards = customCards || DEFAULT_CROCHET_CARDS

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cards }}>
      {children}
    </CardContext.Provider>
  )
}

/* =========================
   Starfield Background (inlined)
   ========================= */

function StarfieldBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 1)
    mountRef.current.appendChild(renderer.domElement)

    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 10000
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, sizeAttenuation: true })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    camera.position.z = 10

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      stars.rotation.y += 0.0001
      stars.rotation.x += 0.00005
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 bg-black" />
}

/* =========================
   Floating Card (inlined)
   ========================= */

function FloatingCard({
  card,
  position,
}: {
  card: Card
  position: { x: number; y: number; z: number; rotationX: number; rotationY: number; rotationZ: number }
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedCard } = useCard()

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const handleClick = (e: any) => {
    e.stopPropagation()
    setSelectedCard(card)
  }
  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = "pointer"
  }
  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = "auto"
  }

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      <Plane
        ref={meshRef}
        args={[4.5, 6]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshBasicMaterial transparent opacity={0} />
      </Plane>

      <Html
        transform
        distanceFactor={10}
        position={[0, 0, 0.01]}
        style={{
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.15)" : "scale(1)",
          pointerEvents: "none",
        }}
      >
        <div
          className="w-40 h-52 rounded-2xl overflow-hidden shadow-2xl bg-[#1F2121] p-3 select-none border border-pink-500/30"
          style={{
            boxShadow: hovered
              ? "0 25px 50px rgba(244, 74, 118, 0.6), 0 0 30px rgba(255, 119, 153, 0.4)"
              : "0 15px 30px rgba(0, 0, 0, 0.6)",
            border: hovered ? "2px solid rgba(244, 74, 118, 0.9)" : "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <img
            src={card.imageUrl || "/placeholder.svg"}
            alt={card.alt}
            className="w-full h-36 object-cover rounded-xl"
            loading="lazy"
            draggable={false}
          />
          <div className="mt-2 text-center">
            <p className="text-white text-xs font-semibold truncate">{card.title}</p>
            <p className="text-[10px] text-pink-400 mt-0.5">Crafts by Criselyn</p>
          </div>
        </div>
      </Html>
    </group>
  )
}

/* =========================
   Card Modal (inlined)
   ========================= */

function CardModal() {
  const { selectedCard, setSelectedCard } = useCard()
  const [isFavorited, setIsFavorited] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  if (!selectedCard) return null

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseEnter = () => {}
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out"
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  const toggleFavorite = () => setIsFavorited((v) => !v)
  const handleClose = () => setSelectedCard(null)
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4" onClick={handleBackdropClick}>
      <div className="relative max-w-md w-full mx-4">
        <button onClick={handleClose} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10">
          <X className="w-8 h-8" />
        </button>

        <div style={{ perspective: "1000px" }} className="w-full">
          <div
            ref={cardRef}
            className="relative cursor-pointer rounded-[24px] bg-[#1a1819] border border-pink-500/30 p-5 transition-all duration-500 ease-out w-full"
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                "0 25px 60px -12px rgba(244, 74, 118, 0.35), 0 0 40px rgba(0, 0, 0, 0.8)",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full mb-4" style={{ aspectRatio: "4 / 5" }}>
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[18px] bg-black object-cover"
                alt={selectedCard.alt}
                src={selectedCard.imageUrl || "/placeholder.svg"}
                style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 12px 0px", opacity: 1 }}
              />
            </div>

            <div className="text-center mb-4">
              <span className="text-[11px] uppercase tracking-widest text-pink-400 font-semibold block mb-1">
                Handmade Crochet Bouquet
              </span>
              <h3 className="text-white text-xl font-serif font-bold">{selectedCard.title}</h3>
              <p className="text-xs text-gray-400 mt-1">Stitched with love by Crafts by Criselyn</p>
            </div>

            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/criselyn.tullao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-xl text-sm font-semibold text-white outline-none transition duration-300 ease-out bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 active:scale-[0.97] shadow-lg shadow-pink-500/30"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquire on Facebook</span>
                </div>
              </a>
              <button
                type="button"
                onClick={toggleFavorite}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-pink-400 border border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 outline-none transition duration-300 ease-out active:scale-[0.97]"
              >
                <Heart className="h-5 w-5" strokeWidth={1.8} fill={isFavorited ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================
   Card Galaxy (inlined)
   ========================= */

function CardGalaxy() {
  const { cards } = useCard()

  const cardPositions = useMemo(() => {
    const positions: {
      x: number
      y: number
      z: number
      rotationX: number
      rotationY: number
      rotationZ: number
    }[] = []
    const numCards = cards.length
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < numCards; i++) {
      const y = 1 - (i / (numCards - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = (2 * Math.PI * i) / goldenRatio
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY
      const layerRadius = 12 + (i % 3) * 4

      positions.push({
        x: x * layerRadius,
        y: y * layerRadius,
        z: z * layerRadius,
        rotationX: Math.atan2(z, Math.sqrt(x * x + y * y)),
        rotationY: Math.atan2(x, z),
        rotationZ: (Math.random() - 0.5) * 0.2,
      })
    }
    return positions
  }, [cards.length])

  return (
    <>
      <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.15} wireframe />
      </Sphere>
      <Sphere args={[12, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f44a76" transparent opacity={0.08} wireframe />
      </Sphere>
      <Sphere args={[16, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff7799" transparent opacity={0.05} wireframe />
      </Sphere>
      <Sphere args={[20, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffadbf" transparent opacity={0.03} wireframe />
      </Sphere>

      {cards.map((card, i) => (
        <FloatingCard key={card.id} card={card} position={cardPositions[i]} />
      ))}
    </>
  )
}

/* =========================
   Page/Component Export
   ========================= */

interface StellarCardGalleryProps {
  cards?: Card[]
  height?: string
}

export default function StellarCardGallerySingle({ cards, height = "h-[650px] lg:h-[750px]" }: StellarCardGalleryProps) {
  return (
    <CardProvider customCards={cards}>
      <div className={`w-full ${height} relative overflow-hidden rounded-3xl bg-black border border-blush-200/40 shadow-soft-lg`}>
        <StarfieldBackground />

        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          className="absolute inset-0 z-10"
          onCreated={({ gl }) => {
            gl.domElement.style.pointerEvents = "auto"
          }}
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.7} color="#fff0f5" />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ffb6c1" />
            <CardGalaxy />
            <OrbitControls
              enablePan
              enableZoom
              enableRotate
              minDistance={5}
              maxDistance={40}
              autoRotate={true}
              autoRotateSpeed={0.3}
              rotateSpeed={0.5}
              zoomSpeed={1.2}
              panSpeed={0.8}
              target={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>

        <CardModal />

        <div className="absolute top-6 left-6 z-20 text-white pointer-events-none max-w-sm sm:max-w-md">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-md">
            <span>✨ Interactive 3D Orbit Galaxy</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
            3D Bouquet Stellar Showcase
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Drag to rotate • Scroll to zoom • Click any bouquet card to view in 3D perspective
          </p>
        </div>
      </div>
    </CardProvider>
  )
}
