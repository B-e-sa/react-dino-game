import { useEffect, useMemo, useState } from 'react'
import { Dino, Background, Cactus } from './App.style'

const appStyle = {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const firstPoroSprite = 'url(./src/assets/poro.png)'
const secondPoroSprite = 'url(./src/assets/porocorrendo.png)'

const App = () => {
    const [isJumping, setIsJumping] = useState(false)
    const [running, setRunning] = useState(firstPoroSprite)

    // Running will re-render itself infinitely
    useMemo(() =>
        setTimeout(() => {
            console.log("oi")
            if (running === firstPoroSprite) {
                setRunning(secondPoroSprite)
            } else {
                setRunning(firstPoroSprite)
            }
        }, 300), [running]
    )

    // After 0.5s user can jump again
    useEffect(() => {
        const time = setTimeout(() => {
            setIsJumping(false)
        }, 500)

        return () => clearTimeout(time)
    }, [isJumping])

    const jump = () => {
        if (isJumping === false) {
            setIsJumping(true)
        }
    }

    return (
        <div
            onClick={jump}
            className="App"
            style={appStyle}
        >
            <Background>
                <div>
                    <Dino
                        jumping={isJumping}
                        poroSprite={running}
                    >
                        <div>
                        </div>
                    </Dino>
                    <Cactus >
                        <div>
                        </div>
                    </Cactus>
                </div>
            </Background>
        </div>
    )
}

export default App