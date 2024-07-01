'use client';
import { useRouter} from "next/navigation";
export default function HeadrList({listItems}:any){
    const router = useRouter();
    const pageNavigate = ({item}: any ) =>{
        router.push(item.path);
        document.body.style.setProperty('--display-side-nav', 'none');
    }

   return listItems.map((item: any, index: number) => {
        const Icon = item.icon;
    return (
        <div className="flex flex-col justify-around mat text-gray-700 font-normal cursor-pointer" key={index} onClick={()=> pageNavigate({item})}>
            <div><Icon  style={{color:item.iconColor}} className="inline-block header-icon"/> <span className="inline-block ml-2">{item?.title}</span></div>
        </div>
        )
    })
    
}


