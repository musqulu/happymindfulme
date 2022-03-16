import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          {/* <SocialIcon kind="github" href={siteMetadata.github} size="4" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="4" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="4" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="4" /> */}
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="4" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="text-sm text-gray-500 dark:text-gray-400">Take care of yourself</div>
          {/* <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div> */}
          {/* <Link href="/">{siteMetadata.title}</Link> */}
        </div>
        <div className="mb-8 text-sm text-red-500 dark:text-red-500">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">@konisupertramp</Link>
        </div>
      </div>
    </footer>
  )
}
