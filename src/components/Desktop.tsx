import { locations } from "#constants/index";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { motion } from "framer-motion";
import { useRef } from "react";
import { withBase } from "#utils/path";

const Desktop = () => {
    const constraintsRef = useRef(null);
    const { openWindow, focusWindow, windows } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleDoubleClick = (item: any) => {
        if (item.fileType === "txt") {
            openWindow("txtfile", item);
        } else if (item.fileType === "pdf") {
            openWindow("resume", item);
        } else {
            // Set the location in Finder
            setActiveLocation(item.type === "work" ? locations.work : item);

            // Open or focus Finder window
            if (windows.finder?.isOpen) {
                focusWindow("finder");
            } else {
                openWindow("finder");
            }
        }
    };

    const desktopItems = [
        ...locations.about.children,
        ...locations.resume.children,
        {
            id: 99,
            name: "Projects",
            icon: "/images/folder.png",
            kind: "folder",
            type: "work",
            position: "top-76 left-10",
            children: locations.work.children,
        }
    ];

    return (
        <div ref={constraintsRef} className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {desktopItems.map((project: any) => (
                <motion.div
                    key={project.id}
                    drag
                    dragMomentum={false}
                    dragConstraints={constraintsRef}
                    onDoubleClick={(e) => { e.stopPropagation(); handleDoubleClick(project); }}
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute flex flex-col items-center gap-2 p-2 w-24 cursor-pointer hover:bg-white/20 rounded-lg transition-colors group pointer-events-auto ${project.position || "top-24 left-10"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <img
                        src={withBase(project.icon)}
                        alt={project.name}
                        className="w-16 h-16 object-contain drop-shadow-lg select-none pointer-events-none"
                    />
                    <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight select-none">
                        {project.name}
                    </span>
                </motion.div>
            ))}
        </div>
    )
}

export default Desktop;
