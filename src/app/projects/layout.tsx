import React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <section className="container mx-auto px-5">{children}</section>
    </div>
  )
}
