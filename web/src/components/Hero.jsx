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
                        <p className="mb-6 text-lg font-semibold">MERN full stack development with users and a contact form, trying to focus in cybersecurity meassures. </p>
                </div>
            </div>
        </section>
    )
}
export default Hero



// <!-- Jumbotron -->
// <div
//   class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
//   style="background-image: url('...'); height: 400px">
//   <div
//     class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
//     style="background-color: rgba(0, 0, 0, 0.6)">
//     <div class="flex h-full items-center justify-center">
//       <div class="text-white">
//         <h2 class="mb-4 text-4xl font-semibold">Heading</h2>
//         <h4 class="mb-6 text-xl font-semibold">Subheading</h4>
//         <button
//           type="button"
//           class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
//           data-te-ripple-init
//           data-te-ripple-color="light">
//           Call to action
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// <!-- Jumbotron -->

