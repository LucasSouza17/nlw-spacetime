import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemories() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="text-small mt-16 flex items-center  gap-1 px-16 text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
