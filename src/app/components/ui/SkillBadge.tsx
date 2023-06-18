import React from "react"

const SkillBadge = ({ children }: { children: string }) => {
  return <span className="border-4 border-black dark:border-whiteaccent rounded-xl p-3">{children}</span>
}

export default SkillBadge
