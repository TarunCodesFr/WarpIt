"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Link2, Copy, Check, Zap, ArrowRight, ShieldCheck, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function ShortenerTool() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setLoading(true)
    setShortUrl("")
    
    // Simulate professional progress bar
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? 90 : prev + 10))
    }, 100)

    try {
      const response = await fetch("http://localhost:4000/api/v1/link/create-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url }),
      })
      const data = await response.json()
      
      clearInterval(interval)
      setProgress(100)
      
      setTimeout(() => {
        if (data.success) {
          setShortUrl(data.data.shortUrl)
          toast.success("Link warped successfully!")
        } else {
          toast.error(data.message || "Failed to shorten URL")
        }
        setLoading(false)
        setProgress(0)
      }, 300)

    } catch (error) {
      clearInterval(interval)
      console.error("Error shortening URL:", error)
      toast.error("Connectivity issue. Ensure the backend is active.")
      setLoading(false)
      setProgress(0)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-orange-500/30 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-card border rounded-[1.8rem] p-3 md:p-4 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleShorten} className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/60" />
              <Input
                type="url"
                placeholder="https://your-long-url.com/something-very-long"
                className="h-14 pl-12 pr-4 bg-background/50 border-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl text-lg transition-all"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="h-14 px-8 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all group/btn"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="h-5 w-5" />
                  </motion.div>
                  <span>Warping...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Shorten</span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              )}
            </Button>
          </form>
          
          <AnimatePresence>
            {loading && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 px-2"
              >
                <Progress value={progress} className="h-1 bg-muted rounded-full overflow-hidden" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {shortUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="mt-6 md:mt-8"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-sm">
              <div className="flex-grow w-full min-w-0">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-2 px-1 text-center md:text-left">Successfully Warped</p>
                <div className="bg-background/80 border rounded-xl md:rounded-2xl p-3 md:p-5 font-mono text-base md:text-2xl font-semibold text-foreground flex items-center justify-between group overflow-hidden">
                  <span className="truncate mr-2 md:mr-4">{shortUrl}</span>
                  <Check className="h-4 w-4 md:h-6 md:w-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </div>
              <Button 
                onClick={copyToClipboard}
                size="lg"
                variant={copied ? "outline" : "default"}
                className={cn(
                  "h-12 md:h-16 px-6 md:px-10 rounded-xl md:rounded-2xl font-bold text-base md:text-lg w-full md:w-auto min-w-[140px] md:min-w-[160px] transition-all",
                  copied ? "border-green-500/50 text-green-600 bg-green-50/50" : "shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                )}
              >
                {copied ? (
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Copied</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Copy className="h-5 w-5" />
                    <span>Copy Link</span>
                  </div>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
