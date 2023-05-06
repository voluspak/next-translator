import Translator from '@/components/Translator'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col gap-10 items-center justify-center p-24'>
      <h1 className=' text-5xl text-bold text-zinc-800'>Translator Migration</h1>
      <Translator />
    </main>
  )
}
