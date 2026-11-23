"use client"

import { useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function Dashboard() {
  const { data: session } = useSession()
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState("")

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setData(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
      const response = await axios.post(`${apiUrl}/api/property/lookup`, {
        address
      })
      setData(response.data)
    } catch (err) {
      console.error(err)
      setError("Failed to fetch property data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">BPO Dashboard</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>New BPO Request</CardTitle>
          <CardDescription>Enter a property address to generate a BPO report.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLookup} className="flex gap-4 items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input 
                id="address" 
                placeholder="123 Main St, Los Angeles, CA 90001" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {loading ? "Searching..." : "Lookup Property"}
            </Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>

      {data && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Subject Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <span className="font-semibold">Address:</span> <span>{data.property.address}</span>
                <span className="font-semibold">Beds:</span> <span>{data.property.beds}</span>
                <span className="font-semibold">Baths:</span> <span>{data.property.baths}</span>
                <span className="font-semibold">Sqft:</span> <span>{data.property.sqft}</span>
                <span className="font-semibold">Year Built:</span> <span>{data.property.year_built}</span>
                <span className="font-semibold">Tax Assessment:</span> <span>${data.property.tax_assessment.toLocaleString()}</span>
                <span className="font-semibold">AVM Value:</span> <span>${data.property.avm_value.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Comparable Sales</CardTitle>
              <CardDescription>Recent sales within 1 mile.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Address</th>
                      <th className="text-left p-2">Sale Price</th>
                      <th className="text-left p-2">Sale Date</th>
                      <th className="text-left p-2">Sqft</th>
                      <th className="text-left p-2">Distance</th>
                      <th className="text-left p-2">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparables.map((comp: any, i: number) => (
                      <tr key={i} className="border-b">
                        <td className="p-2">{comp.address}</td>
                        <td className="p-2">${comp.sale_price.toLocaleString()}</td>
                        <td className="p-2">{new Date(comp.sale_date).toLocaleDateString()}</td>
                        <td className="p-2">{comp.sqft}</td>
                        <td className="p-2">{comp.distance_miles.toFixed(2)} mi</td>
                        <td className="p-2">{comp.similarity_score.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
