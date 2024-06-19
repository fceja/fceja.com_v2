import "@scss/common/components/semantic/Footer.scss"
import Headlines from "@common/components/Headlines"

const Footer = () => {
    return (
        <footer className="d-flex flex-column pb-3">
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
                    View code on <a href="https://github.com/fceja/fceja.com_V2" target="_blank">GitHub</a>.
                </i>
            </p>
            <Headlines />
        </footer>
    )
}

export default Footer