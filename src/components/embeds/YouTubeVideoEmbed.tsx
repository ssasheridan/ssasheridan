'use client'

import { useState, useEffect } from 'react'
import { FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'
import Button from '@/components/ui/Button'

interface YouTubeVideoEmbedProps {
  url: string
  title?: string
}

// Extract YouTube video ID from various URL formats
function extractYouTubeId(urlString: string): string | null {
  if (!urlString) return null
  
  const cleanUrl = urlString.trim()
  
  // Comprehensive patterns for various YouTube URL formats
  const patterns = [
    // Standard: https://www.youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    // Shortened: https://youtu.be/VIDEO_ID
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    // Embed: https://www.youtube.com/embed/VIDEO_ID
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    // Mobile: https://m.youtube.com/watch?v=VIDEO_ID
    /m\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    // Just the video ID (if someone enters just the ID)
    /^([a-zA-Z0-9_-]{11})$/,
  ]

  for (const pattern of patterns) {
    const match = cleanUrl.match(pattern)
    if (match && match[1] && match[1].length === 11) {
      return match[1]
    }
  }

  // Try to find any 11-character sequence that looks like a video ID
  const idMatch = cleanUrl.match(/[a-zA-Z0-9_-]{11}/)
  if (idMatch && idMatch[0].length === 11) {
    return idMatch[0]
  }

  return null
}

export default function YouTubeVideoEmbed({ url, title = 'Video' }: YouTubeVideoEmbedProps) {
  const [videoId, setVideoId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!url) {
      setError('No YouTube URL provided')
      setIsLoading(false)
      return
    }

    // Extract video ID
    const extractedId = extractYouTubeId(url)
    
    if (!extractedId || extractedId.length !== 11) {
      setError(`Invalid YouTube URL format. Please use one of these formats:
• https://www.youtube.com/watch?v=VIDEO_ID
• https://youtu.be/VIDEO_ID
• Just the video ID (11 characters)`)
      setIsLoading(false)
      return
    }

    setVideoId(extractedId)
    
    // Test if video is accessible by trying to load a thumbnail
    const testVideoAccess = async () => {
      try {
        const thumbnailUrl = `https://img.youtube.com/vi/${extractedId}/maxresdefault.jpg`
        const response = await fetch(thumbnailUrl, { method: 'HEAD' })
        
        if (!response.ok && response.status === 404) {
          // Video might be private/unlisted, but still try to embed
          // YouTube will show its own error message if needed
        }
        setIsLoading(false)
      } catch (err) {
        // Continue anyway - the iframe will show YouTube's error if needed
        setIsLoading(false)
      }
    }

    testVideoAccess()
  }, [url])

  if (isLoading) {
    return (
      <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-navy/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-khalsa mx-auto mb-4"></div>
          <p className="text-softblue">Loading video...</p>
        </div>
      </div>
    )
  }

  if (error || !videoId) {
    return (
      <div className="glass-card p-8 text-center rounded-2xl">
        <FaYoutube className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-display font-bold text-navy mb-2">
          Video Not Available
        </h3>
        {error && (
          <div className="text-left bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800 text-sm whitespace-pre-line">{error}</p>
          </div>
        )}
        <p className="text-softblue mb-6">
          Please check your YouTube URL in Sanity CMS and make sure it&apos;s in the correct format.
        </p>
        <div className="bg-lightgrey rounded-lg p-4 mb-6 text-left">
          <p className="text-sm font-semibold text-navy mb-2">Accepted formats:</p>
          <ul className="text-sm text-softblue space-y-1 list-disc list-inside">
            <li><code className="bg-white px-2 py-1 rounded">https://www.youtube.com/watch?v=dQw4w9WgXcQ</code></li>
            <li><code className="bg-white px-2 py-1 rounded">https://youtu.be/dQw4w9WgXcQ</code></li>
            <li><code className="bg-white px-2 py-1 rounded">dQw4w9WgXcQ</code> (just the video ID)</li>
          </ul>
        </div>
        {url && (
          <Button 
            href={url} 
            size="lg" 
            external
            className="inline-flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            Open Video on YouTube
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  )
}

