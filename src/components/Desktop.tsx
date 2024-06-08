import React from 'react';
import DesktopShortcut from './DesktopShortcut';
import Window from "./Window";

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    return ( 
        <>
        <div style={styles.desktop}>
            <DesktopShortcut
                shortcutName={"banana"}
            />
        </div>
        <Window width={250} height={250} top={25}
            left={25}
        />
        </>
    )
}

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#3e9697',
    }
};

export default Desktop;