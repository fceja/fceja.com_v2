import "@scss/common/components/semantic/Footer.scss"
const Footer = () => {
    return (
        <footer>
            <p className="">
                <i>
                    Created with { }
                    <a href="https://vitejs.dev/" target="_blank">Vite</a>.
                    Implemented with { }
                    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, { }
                    <a href="https://react.dev/" target="_blank">React</a>, { }
                    <a href="https://html.spec.whatwg.org/multipage/" target="_blank">HTML</a> { }
                    and <a href="https://sass-lang.com/" target="_blank">SASS</a>. { }
                    Deployed with <a href="https://aws.amazon.com/" target="_blank">AWS</a>. { }
                    Code viewable on <a href="https://github.com/fceja/fceja.com_V2" target="_blank">GitHub</a>.
                </i>
            </p>
        </footer>
    )
}

export default Footer