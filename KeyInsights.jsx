import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function KeyInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          <li>Most businesses are concentrated in the town center</li>
          <li>Retail is the dominant business type</li>
          <li>There's a growing number of tech startups in the Birchwood area</li>
        </ul>
      </CardContent>
    </Card>
  )
}

