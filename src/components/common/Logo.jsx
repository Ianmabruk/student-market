const Logo = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#006B46"/>
      <path d="M12 14H28L26 28H14L12 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 18V16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Logo
