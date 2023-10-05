import heroBkg from "../img/hero.jpg"

const Hero = () => {

    return (
        <section className="h-screen relative flex flex-col items-center" style={{
            background: `url(${heroBkg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div className="flex flex-col h-full items-center justify-center text-white">                    
                    <h2 className="mb-4 text-4xl font-semibold">Project with a contact form</h2>
                    <p className="mb-6 text-lg font-semibold">Full stack MERN development including users and a contact form, with a focus on cybersecurity meassures. </p>
                </div>
            </div>
        </section>
    )
}
export default Hero


