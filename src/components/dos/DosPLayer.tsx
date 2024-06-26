import React, { useEffect, useRef, useState } from 'react';

import { DosPlayer as Instance, DosPlayerFactoryType } from 'js-dos';

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
    bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    const [dos, setDos] = useState<Instance | null>(null);

    useEffect(() => {
        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current as HTMLDivElement;
        const instance = Dos(root);

        setDos(instance);
        const elements = rootRef.current.getElementsByClassName('flex-grow-0');
        while (elements.length > 0) {
            elements[0].remove();
        }

        return () => {
            instance.stop();
        };
    }, [rootRef]);

    useEffect(() => {
        if (dos !== null) {
            dos.run(props.bundleUrl);
        }
        console.log('root',rootRef)
    }, [dos, props.bundleUrl]);

    return (
        <div className='apple'
            ref={rootRef}
            style={{
                width: '100%',
                height: '100%',
                // position: 'absolute',
            }}
        ></div>
    );
}
