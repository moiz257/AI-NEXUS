import Logo from "@/assets/logo.svg"
import Linkedin from "@/assets/linkedin-svgrepo-com.svg"
import Github from "@/assets/github-svgrepo-com.svg"
import Npm from "@/assets/npm-svgrepo-com.svg"
import Link from "next/link"
export const Footer = () => {
  return <footer className=" py-5 border-t border-white/15">
    <div className=" container">
      <div className=" flex flex-col lg:flex-row lg:items-center gap-8">
      <div className=" flex gap-2 items-center lg:flex-1">
      <Logo className=" h-12 w-12"/>
      <div className=" font-medium">AI startup Landing page </div>
      </div>
      <div>
        <nav className=" flex flex-col gap-5 lg:flex-row lg:gap-7 lg:justify-center">
          <a href="#" className=" text-white/70 hover:text-white text-xs md:text-sm transition">Features</a>
          <a href="#" className=" text-white/70 hover:text-white text-xs md:text-sm transition">Developers</a>
          <a href="#" className=" text-white/70 hover:text-white text-xs md:text-sm transition">Company</a>
          <a href="#" className=" text-white/70 hover:text-white text-xs md:text-sm transition">Blog</a>
          <a href="#" className=" text-white/70 hover:text-white text-xs md:text-sm transition">Change Log</a>
        </nav>
      </div>
      <div className="flex gap-5 lg:flex-1 lg:justify-end ">
       <Link href="https://www.linkedin.com/in/moiz-ali-20b280274/">
       <Linkedin width={25}  className="text-white/40 transition hover:cursor-pointer" />
       </Link>
       <Link href="https://github.com/moiz257">
       <Github width={25}  className="text-white/40  transition hover:cursor-pointer"/>
       </Link>
       <Link href="https://www.npmjs.com/~moiz257">
       <Npm width={40} className="text-white/40 transition hover:cursor-pointer"/>
       </Link>
      </div>
      </div>
      <div className="font-medium lg:text-center">&copy;Moiz Ali Kamalshah, All rights reserved.</div>
    </div>

  </footer>;
};
