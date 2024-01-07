
export function Footer() {
  return (
    <footer className="py-6 md:px-8">
      <div className="container flex flex-col justify-center items-center gap-0 xh-2 xmd:flex-row">
        <p className="text-center text-sm leading-loose xtext-muted-foreground">
          Built with React and ❤️ in the Netherland
        </p>
        {false &&<p className="text-center text-xs leading-loose text-muted-foreground">
          Probably deployed faster then your enterprise app, let me teach you how you can do the same,
          <a className="underline underline-offset-2" href="https://www.linkedin.com/in/koen-verburg-728920102/">write me a message here</a>
        </p>}
      </div>
    </footer>
  )
}
