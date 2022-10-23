import { useEffect, useState } from 'react';
import { Header } from './header';
import { PickOptions } from './pickOptions';
import { PickOutcome } from './pickOutcome';
import { RulesModal } from './rulesModal';

interface iWinConditions {
    scissors: string;
    paper: string;
    rock: string;
    lizard: string;
    spock: string;
}

export const Game = () => {
    const [firstRender, setFirstRender] = useState(true);
    const [showRules, setShowRules] = useState(false);
    const [bonus, setBonus] = useState(false);
    const [score, setScore] = useState(0);
    const [playerPicked, setPlayerPicked] = useState('');
    const [housePicked, setHousePicked] = useState('');
    const [winner, setWinner] = useState('');

    useEffect(() => {
        const localScore = localStorage.getItem('score');
        const localBonus = localStorage.getItem('bonus');
        if (firstRender) {
            if (localScore) {
                setScore(parseInt(localScore));
            }
            if (localBonus) {
                setBonus(localBonus === 'true' ? true : false);
            }
            setFirstRender(false);
        } else {
            localStorage.setItem('score', score.toString());
        }
    }, [score, firstRender]);

    useEffect(() => {
        const winConditions: iWinConditions = {
            scissors: 'paper lizard',
            paper: 'rock spock',
            rock: 'scissors lizard',
            lizard: 'paper spock',
            spock: 'scissors rock',
        };
        if (playerPicked && housePicked) {
            if (
                winConditions[playerPicked as keyof iWinConditions].includes(
                    housePicked
                )
            ) {
                setWinner('player');
            } else if (playerPicked === housePicked) {
                setWinner('draw');
            } else {
                setWinner('house');
            }

            winner === 'player'
                ? setScore(score => score + 1)
                : winner === 'house'
                ? setScore(score => score - 1)
                : undefined;
        }
    }, [playerPicked, housePicked, winner]);

    const handleHousePicked = (count: number) => {
        const random = Math.ceil(Math.random() * count);
        switch (random) {
            case 1:
                setHousePicked(() => 'rock');
                break;
            case 2:
                setHousePicked(() => 'scissors');
                break;
            case 3:
                setHousePicked(() => 'paper');
                break;
            case 4:
                setHousePicked(() => 'lizard');
                break;
            case 5:
                setHousePicked(() => 'spock');
                break;
            default:
                break;
        }
    };

    const playAgain = () => {
        setPlayerPicked('');
        setHousePicked('');
        setWinner('');
    };

    const handlePicked = (picked: string) => {
        setPlayerPicked(picked);
        setTimeout(() => {
            bonus ? handleHousePicked(5) : handleHousePicked(3);
        }, 1000);
    };

    const handleShowRules = () => {
        setShowRules(!showRules);
    };

    const handleBonusMode = (bonusMode: boolean) => {
        setBonus(bonusMode);
        localStorage.setItem('bonus', bonusMode.toString());
    };

    return (
        <>
            <Header
                score={score}
                bonus={bonus}
                handleBonusMode={handleBonusMode}
            />

            <main>
                {!playerPicked ? (
                    <PickOptions bonus={bonus} handlePicked={handlePicked} />
                ) : (
                    <PickOutcome
                        winner={winner}
                        playerPicked={playerPicked}
                        housePicked={housePicked}
                        playAgain={playAgain}
                    />
                )}
            </main>

            {showRules && (
                <RulesModal bonus={bonus} handleShowRules={handleShowRules} />
            )}

			<footer>
				<button
					className='border-2 border-gray-500 rounded-xl py-2 px-8 text-gray-300 tracking-widest lg:absolute lg:right-8 lg:bottom-8'
					onClick={handleShowRules}
				>
					RULES
				</button>
			</footer>
        </>
    );
};
