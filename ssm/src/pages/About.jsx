import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCon from '../components/Containers/ProductCon'
import Footer from '../components/Footer'
import work1 from '../assets/Default_product/wrk1.jpeg'
import work2 from '../assets/Default_product/wrk2.jpeg'
import work3 from '../assets/Default_product/wrk3.jpeg'
import work4 from '../assets/Default_product/wrk4.jpeg'
import work5 from '../assets/Default_product/wrk5.jpeg'
import work6 from '../assets/Default_product/wrk6.jpeg'
import work7 from '../assets/Default_product/wrk7.jpeg'
import work8 from '../assets/Default_product/wrk8.jpeg'
import work9 from '../assets/Default_product/wrk-9.jpeg'
import work10 from '../assets/Default_product/wrk-10.jpeg'

const processStages = [
  { title: 'Understand the brief', text: 'We clarify the product, quantity, finish, and delivery expectations before production begins.', image: work1 },
  { title: 'Select the right material', text: 'Our team matches yarns and textile constructions to the required performance and final use.', image: work2 },
  { title: 'Prepare the production plan', text: 'Technical specifications, sampling, and capacity planning turn the brief into a dependable workflow.', image: work3 },
  { title: 'Set up the machines', text: 'Production equipment is configured and checked to keep the process consistent from the first metre.', image: work4 },
  { title: 'Weave and knit', text: 'Skilled operators and modern systems transform the selected material into the required textile.', image: work5 },
  { title: 'Inspect every stage', text: 'In-process checks help us catch variation early and maintain the quality standard throughout the run.', image: work6 },
  { title: 'Finish for performance', text: 'The fabric receives the finishing treatment, colour, handle, and presentation agreed with the buyer.', image: work7 },
  { title: 'Measure and approve', text: 'Finished goods are tested, measured, and reviewed before they move to packing.', image: work8 },
  { title: 'Pack for export', text: 'Goods are protected, labelled, and organised for efficient handling at every point of the journey.', image: work9 },
  { title: 'Deliver with confidence', text: 'We coordinate the final dispatch so every order arrives ready for its next application.', image: work10 }
]

const About = () => {
  const [visibleStages, setVisibleStages] = React.useState(new Set())
  const [isTimelineVisible, setIsTimelineVisible] = React.useState(false)
  const stageRefs = React.useRef([])
  const titleRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (entry.target === titleRef.current) {
            setIsTimelineVisible(true)
            observer.unobserve(entry.target)
            return
          }

          const stageIndex = Number(entry.target.dataset.stage)
          setVisibleStages((current) => {
            if (current.has(stageIndex)) return current
            return new Set(current).add(stageIndex)
          })
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2 }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    stageRefs.current.filter(Boolean).forEach((stage) => observer.observe(stage))

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="bg-[#eef2ed] px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">About SSM</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">We create quality textiles that move global markets.</h1>
          </div>

          <div className="space-y-4 text-lg leading-8 text-slate-700">
            <p>
              SSM Weaving & Knitting Mills has been building a dependable exporting identity through modern production,
              consistent quality standards, and responsive service to international buyers.
            </p>
            <p>
              From yarn to finished textile goods, we combine craftsmanship with dependable manufacturing systems that meet
              commercial expectations and delivery commitments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 text-slate-900 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Our process timeline</p>
            <h2 ref={titleRef} className={`timeline-title mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl ${isTimelineVisible ? 'timeline-title--visible' : ''}`}>From brief to shipment</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
              Every order moves through a clear sequence of decisions, checks, and skilled production work.
            </p>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl space-y-14 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-slate-300 md:space-y-20 md:before:left-1/2 md:before:-translate-x-1/2">
            {processStages.map((stage, index) => (
              <article
                ref={(element) => { stageRefs.current[index] = element }}
                data-stage={index}
                key={stage.title}
                className={`timeline-stage relative grid gap-8 pl-12 md:min-h-64 md:grid-cols-2 md:items-center md:gap-20 md:pl-0 ${visibleStages.has(index) ? 'timeline-stage--visible' : ''}`}
              >
                <div className={`md:pr-8 ${index % 2 === 1 ? 'md:order-2 md:pl-8 md:pr-0' : ''}`}>
                  <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center border-4 border-gray-50 bg-emerald-500 text-xs font-black text-slate-950 md:left-1/2 md:-translate-x-1/2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Stage {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl">{stage.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">{stage.text}</p>
                </div>
                <div className={`overflow-hidden border border-slate-200 bg-white shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img src={stage.image} alt={stage.title} className="h-52 w-full object-cover transition duration-500 hover:scale-105 sm:h-60" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductCon />
      <Footer />
    </div>
  )
}

export default About
