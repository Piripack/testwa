import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function TechnicalToggle() {
  const [isTechnical, setIsTechnical] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="technical-mode"
        checked={isTechnical}
        onCheckedChange={setIsTechnical}
      />
      <Label htmlFor="technical-mode">
        {isTechnical ? 'Technical Mode' : 'Basic Mode'}
      </Label>
    </div>
  )
}

