import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function TechnicalDetails() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="w-full max-w-4xl mt-8">
      <CardHeader>
        <CardTitle>Technical Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline">
              {isOpen ? (
                <>
                  Hide Technical Details
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Technical Details
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <h3 className="text-lg font-semibold">Data Collection</h3>
            <p>Data was collected using the Google Places API on [Insert Date]. The search was centered on Warrington, UK (53.3900° N, 2.5970° W) with a radius of 5km.</p>
            
            <h3 className="text-lg font-semibold mt-4">Analysis Methodology</h3>
            <p>Businesses were clustered using the K-means algorithm with 5 clusters. The number of clusters was chosen based on the elbow method.</p>
            
            <h3 className="text-lg font-semibold mt-4">Limitations</h3>
            <p>This data represents a snapshot in time and may not reflect current business distributions. API limitations restrict the total number of businesses that could be fetched.</p>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

