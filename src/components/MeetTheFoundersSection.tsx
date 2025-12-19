import judePhoto from '@/assets/judechatgptimage.png';
import bertiePhoto from '@/assets/bertie-photo-new.png';
import { motion } from 'framer-motion';
export default function MeetTheFoundersSection() {
  return <section id='founders' className='bg-muted/30 py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center text-center rounded-[24px] max-w-7xl mx-auto my-8 sm:my-12'>
      <motion.h2 className='text-3xl md:text-4xl font-heading font-bold mb-12 text-foreground' initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }}>
        Meet the Founders
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center w-full max-w-5xl'>
        {/* Jude Hill */}
        <motion.div className='flex flex-col items-center' initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }}>
          <img src={judePhoto} alt='Jude Hill, Co-Founder of Synergaise' className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-[16px] shadow-md mb-6' />
          <h3 className='text-xl font-semibold text-foreground'>Jude Hill</h3>
          <p className='text-sm text-muted-foreground'>Co-Founder, Synergaise</p>
        </motion.div>

        {/* Bertie Ross */}
        <motion.div className='flex flex-col items-center' initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <div className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-[16px] shadow-md mb-6 overflow-hidden'>
            <img src={bertiePhoto} alt='Bertie Ross, Co-Founder of Synergaise' className='w-full h-full object-cover object-[center_30%]' />
          </div>
          <h3 className='text-xl font-semibold text-foreground'>Bertie Ross</h3>
          <p className='text-sm text-muted-foreground'>Co-Founder, Synergaise</p>
        </motion.div>
      </div>

      <motion.p className='max-w-3xl mt-12 text-muted-foreground text-base leading-relaxed' initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.7,
      delay: 0.2
    }}>Synergaise was founded by Jude Hill and Bertie Ross, two friends driven by a shared belief that AI should enhance human capability, not replace it. Together, they design and implement intelligent systems that help businesses automate with purpose, combining strategic thinking, design clarity, and hands-on technical execution.


Both Jude and Bertie work directly with every client, from the first discovery call to the final deployment. They lead fulfilment, system design, and ongoing optimisation to ensure every automation delivers measurable results and lasting value. Their approach is collaborative, practical, and deeply human. They blend creativity with engineering precision to redefine what operational intelligence looks like for modern teams.</motion.p>
    </section>;
}