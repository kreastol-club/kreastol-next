import Card from '@/app/[lang]/components/Card';
import React from 'react'

function About() {
  return (
    <div className="flex flex-row w-full justify-evenly">
        <Card>
            <h2>Pros</h2>
        </Card>
        <Card>
            <h2>Cons</h2>
        </Card>
    </div>
  )
}

export default About;