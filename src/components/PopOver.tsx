
type PopOverProps = {
    children: React.ReactNode;
    target: string; 
}

export default function PopOver({ children, target }: PopOverProps) {
    return (
     <div id={target} popover="auto" className="relative w-[85vw] h-[400px] lg:h-[500px] xl:h-[600px]  m-auto">
        {children}
        <button popoverTarget={target} popoverTargetAction="hide" className="text-4xl absolute top-0 right-2" >&times;</button>
    </div>
    );

}