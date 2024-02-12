import {Loader2} from 'lucide-react';

const Loading = () => {
  return (
    <div className='  min-h-[calc(100vh-80px)]  flex flex-col items-center justify-center '>
     <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

export default Loading