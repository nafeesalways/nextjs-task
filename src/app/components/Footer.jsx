import React from 'react'

export default function Footer() {
  return (
  <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 my-10">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by UniCare Industries Ltd</p>
  </aside>
</footer>
  )
}
