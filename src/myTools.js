
// everytime a person dies remove them from the players list
// only print alibis from players and agents alive
class StoryLine {
    constructor() {
        this.players = [
            "Ethan Sullivan",
            "Sophia Martinez",
            "Benjamin Reynolds",
            "Olivia Thompson",
            "Lucas Anderson",
            "Ava Wilson"
        ];

        // create the first mafia agent
        this.mafiaAgent1 = this.getRandomPLayer();

        // remove mafia choice from player options
        this.players = this.players.filter(name => {
            return name !== this.mafiaAgent1;
        });

        // create the second mafia agent
        this.mafiaAgent2 = this.getRandomPLayer();

        // remove mafia choice from player options
        this.players = this.players.filter(name => {
            return name !== this.mafiaAgent2;
        });
    }
    getRandomPLayer() {
        let randomIndex = Math.floor(Math.random() * 100 % this.players.length);
        return this.players[randomIndex];
    };

    getIntro(){
        return [
            {
                "key": 1,
                "discription": `I will introduce the rules of the game. 
                The rules of the game have been modified to suite a single player game. 
                This is because mafia is a multiplayer game. 
                If you already know the rules, and would like to skip forward then press ➡️.`
            },

            {
                "key": 2,
                "discription": "In this game of mafia there are",
                "options": [
                    "4 Civilians",
                    "2 Mafia"
                ]
            },
            
            {
                "key": 3,
                "discription": `There are 4 rounds in this game. During each round of the game the mafia will choose 1 player to kill. 
                You will choose:`,
                "options": [
                    "1 player to save",
                    "1 person to investigate ( if they are the part of the mafia )"
                ]
            },

            {
                "key": 4,
                "discription": `You the player have the ability to both save and investigate, so this calls for a special role. 
                Your role is MD Sharif "username". You fight crime during the day, and save patients at night.
                `
            },

            {
                "key": 5,
                "discription": `You the player have the ability to both save and investigate, so this calls for a special role. 
                Your role is MD Sharif "username". You fight crime during the day, and save patients at night.
                `
            },

            {
                "key": 6,
                "discription": `You win if you can guess the 2 mafia agents. With that Lets start.`
            }
        ]
    }
    getStages(){
        
        const VICTIMS = {
            "first": this.players[this.players.length - 1],
            "second": this.players[this.players.length - 2],
            "third": this.players[this.players.length - 3],
            "fourth": this.players[this.players.length - 4]
        };

        return [
            {
                "key": 1,
                "victim": VICTIMS.first,
                "guessVictim": {
                    "correct": `${VICTIMS.first} misstook a cup of poision for starbucks and passed out. 
                    Luckily would be on ${VICTIMS.first} side as a bistander would have the appropriet antidote.`,
                    "wrong": `Good morning, there was nothing anyone could do really ${VICTIMS.first} misstook a cup of poision for starbucks and passed out. `
                },
                "guessMafia": {
                    "correct": `A mafia agent was attempting to add a few drops from a poisionious vial into ${VICTIMS.first}'s drink, 
                    ensuring that no one noticed his malevolent act. However, unbeknownst to Victor, another figure had been observing 
                    his every move from a nearby table. Detective Alex Sullivan, an astute investigator with an unwavering commitment to justice, 
                    had been on the agents's trail for months. Acting on a tip, he had positioned himself inconspicuously in the café, 
                    ready to pounce at the first sign of criminal activity.`,
                    "wrong": "$guess was wrong, shake the incorrect div and move on ",
                    "alibis": [
                        {
                            "person": VICTIMS.second,
                            "reason": `${VICTIMS.second}, assigned to the case, has a verified alibi as she was in the police station conducting 
                            an interrogation at the time of the incident.`
                        },
                        {
                            "person": VICTIMS.third,
                            "reason": `${VICTIMS.third}, a barista at the Starbucks,
                            was on her scheduled break when the incident occurred and had no access to the poison.`
                        },
                        {
                            "person": this.mafiaAgent1,
                            "reason": `${this.mafiaAgent1}, a close friend of the victim, claims to have been in a different city during the incident, 
                            but there are inconsistencies in her alibi that raise suspicions about her involvement.`
                        },
                        {
                            "person": VICTIMS.fourth,
                            "reason": `${VICTIMS.fourth}, a bystander at the Starbucks, can provide a detailed account of his interactions with other
                             customers and staff, confirming he had no involvement in the incident.`
                        },
                        {
                            "person": this.mafiaAgent2,
                            "reason": `${this.mafiaAgent2}, a long-time acquaintance of the victim, claims to have been at a different coffee shop at 
                            the time of the incident, but his relationship with the victim raises suspicions about his potential motive.`
                        }
                    ]
                }
            },
            {
                "key": 2,
                "victim": VICTIMS.second,
                "guessVictim": {
                    "correct": `In the bustling metropolis of Newhaven, a prominent socialite ${VICTIMS.second} almost met a tragic demise. 
                    civilianName was shot 3 times as they fled their assailent. Luckily for civilianName there was an ambulance right 
                    across the street.`,
                    "wrong": `In the bustling metropolis of Newhaven, a prominent socialite ${VICTIMS.second} met a tragic and untimely demise. 
                    As a pillar of the city's elite, ${VICTIMS.second} was shot 5 times as they fled their assailent. ${VICTIMS.second} murder sent 
                    shockwaves through high society, leaving everyone scrambling for answers. 
                    `
                },
                "guessMafia": {
                    "correct": `Detective Cladio Bravo closed in on the would be killer of ${VICTIMS.second}. Through tireless investigation 
                    and clever deduction, he unearthed a web of betrayal and deceit that led him to the surprising culprit, the mafia agent. 
                    Motivated by jealousy and fueled by a hidden betrayal, the mafia agent succumbed to the darkest depths of her heart, 
                    committing the heinous act. But Detective Bravo's unwavering commitment to justice prevailed, as he pieced together the 
                    evidence, leaving no stone unturned. In a dramatic confrontation, he confronted mafia agent, exposing thier guilt and bringing 
                    closure to a city haunted by the murder of one of its brightest stars.`,
                    "wrong": "$guess was wrong, shake the incorrect div and move on ",
                    "alibis": [
                        {
                            "person": VICTIMS.first,
                            "reason": `${VICTIMS.first}, the victim's personal assistant, was captured on surveillance footage at a different 
                            location when the crime occurred.`
                        },
                        {
                            "person": VICTIMS.third,
                            "reason": `${VICTIMS.third}, a renowned chef, was working in his restaurant's kitchen during the murder, with 
                            multiple staff members confirming his presence.`
                        },
                        {
                            "person": this.mafiaAgent1,
                            "reason": `${this.mafiaAgent1}, a close friend of the victim, was attending a yoga class at the local gym, 
                            but thier instructor and fellow classmates disagree.`
                        },
                        {
                            "person": VICTIMS.fourth,
                            "reason": `${VICTIMS.fourth}, a taxi driver, has a digital record of his fares that shows he was occupied 
                            with a passenger on the other side of town during the time of the murder.`
                        },
                        {
                            "person": this.mafiaAgent2,
                            "reason": `${this.mafiaAgent2}, a Starbucks employee, asserts that she was on her break during the incident, 
                            but her history of conflicts with the victim and a recent disagreement raises questions about her possible involvement.`
                        }
                    ]
                }
            },
            {
                "key": 3,
                "victim": VICTIMS.third,
                "guessVictim": {
                    "correct": `Due to the ruthless actions of a mafia agent, the peaceful existence of ${VICTIMS.third}  was almost abruptly shattered.
                     Motivated by a sinister agenda, the killer meticulously attempted their plan, trying to take the life of an unsuspecting ${VICTIMS.third}. 
                     Fortunately for ${VICTIMS.third}, the police got a tip of what would be a devistating murder and where to there to apprehend the agent. 
                     Seing this the agent withdrew their commitment and ran away into the the darkness of the night.`,
                    "wrong": `In a quiet suburban neighborhood, the peaceful existence of ${VICTIMS.third} was abruptly shattered by the ruthless actions of a 
                    mafia agent. Motivated by a sinister agenda, the killer meticulously executed their plan, taking the life of an unsuspecting 
                    and innocent civilian. The crime sent shockwaves through the community, leaving behind a haunting reminder of the ever present 
                    darkness that can lurk beneath the surface of seemingly ordinary lives. As law enforcement launched an intense investigation, 
                    the pursuit of justice intensified, seeking to unveil the identity of the nefarious mafia agent and bring them to account for 
                    their heinous act, all while the community grappled with the profound loss of a cherished member.
                    `
                },
                "guessMafia": {
                    "correct": `In the heart of a bustling city, the vigilant efforts of law enforcement averted a catastrophic tragedy as they 
                    intercepted the nefarious plans of a mafia agent. With a ${VICTIMS.third} unwittingly targeted for murder, the relentless pursuit of 
                    justice led the authorities to uncover the plot just in the nick of time. Swiftly apprehending the would-be killer, the community 
                    breathed a collective sigh of relief, spared from the devastating loss that could have ensued. The foiled attempt served as a stark 
                    reminder of the tireless dedication of those sworn to protect, reaffirming the resilience of the city in the face of darkness and the 
                    unwavering commitment to safeguard innocent lives.`,
                    "wrong": "$guess was wrong, shake the incorrect div and move on ",
                    "alibis": [
                        {
                            "person": VICTIMS.first,
                            "reason": `${VICTIMS.first}, a close friend of the victim, was attending a charity event during the time of the planned 
                            murder, with multiple witnesses attesting to her presence.`
                        },
                        {
                            "person": VICTIMS.second,
                            "reason": `${VICTIMS.second}, known for his unwavering dedication to justice, was conducting an interrogation with a suspect 
                            in an unrelated case when the planned murder was scheduled to take place.`
                        },
                        {
                            "person": this.mafiaAgent1,
                            "reason": `${this.mafiaAgent1}, a known associate of the mafia, claims to have been at a distant location during the planned 
                            murder, but her alibi raises suspicions due to inconsistencies in their statement.`
                        },
                        {
                            "person": VICTIMS.fourth,
                            "reason": `${VICTIMS.fourth}, a delivery driver, has a GPS tracked log showing he was making deliveries in 
                            a different part of town during the time of the planned murder.`
                        },
                        {
                            "person": this.mafiaAgent2,
                            "reason": `${this.mafiaAgent2}, a mysterious individual with ties to the criminal underworld, provides an alibi 
                            for their innocence, but their reputation as a skilled manipulator casts doubt on their credibility.`
                        }
                    ]
                }
            },
            {
                "key": 4,
                "victim": VICTIMS.fourth,
                "guessVictim": {
                    "correct": `A sinister mafia agent plots to end the life of an unsuspecting ${VICTIMS.fourth} by discreetly poisoning ${VICTIMS.fourth} beverage. 
                    Unbeknownst to the mafia agent, a vigilant bystander witnesses the suspicious act and swiftly alerts law enforcement. 
                    Responding with precision and swiftness, the authorities arrive in the nick of time, thwarting the killer's lethal intentions. 
                    The would be victim is saved from harm's way, their life spared due to the observant heroism of the vigilant bystander and the 
                    timely intervention of law enforcement, turning the tables on the malevolent mafia agent and paving the way for justice to prevail.`,
                    "wrong": `In the depths of an urban landscape teeming with secrets, a sinister mafia agent orchestrates the demise of an unsuspecting ${VICTIMS.fourth}. 
                    Driven by a twisted desire for control, the killer resorts to a meticulously planned poisoning, lacing a seemingly harmless drink with a lethal toxin. 
                    The innocent civilian, oblivious to the imminent danger, consumes the fatal concoction, succumbing to a silent and agonizing death. The motive behind 
                    this heinous act remains veiled in darkness, as law enforcement races against time to unravel the threads of deception, determined to unmask the 
                    identity of the ruthless mafia agent and bring them to justice for their chilling crime.
                    `
                },
                "guessMafia": {
                    "correct": `Amidst the backdrop of an unsuspecting city, a sinister mafia agent plots to end the life of an unsuspecting ${VICTIMS.fourth}. Intent on 
                    executing their nefarious plan, the killer meticulously orchestrates a staged accident, aiming to eliminate the target discreetly. However, 
                    they were very careless and where caught by a nearby bystander. In a rush of adrinaline the maffia agent flees the scene a drops the lethal 
                    toxin on the floor.`,
                    "wrong": "$guess was wrong, shake the incorrect div and move on ",
                    "alibis": [
                        {
                            "person": VICTIMS.first,
                            "reason": `${VICTIMS.first}, assigned to the case, was attending a mandatory training seminar at the police department when the poison 
                            was added to the victim's Starbucks, making it impossible for her to be involved.`
                        },
                        {
                            "person": VICTIMS.second,
                            "reason": `${VICTIMS.second}, a barista at Starbucks, has a solid alibi as she was on vacation visiting her family out of 
                            town during the time of the poisoning.`
                        },
                        {
                            "person": this.mafiaAgent1,
                            "reason": `${this.mafiaAgent1}, a close friend of the victim, claims to have been in another city visiting relatives during the time of the poisoning. 
                            However, further investigation reveals inconsistencies in their alibi, raising suspicions about their involvement.`
                        },
                        {
                            "person": VICTIMS.third,
                            "reason": `${VICTIMS.third}, a regular customer at the Starbucks, can be seen on security camera footage at a different coffee shop at the precise 
                            moment when the poison was added.`
                        },
                        {
                            "person": this.mafiaAgent2,
                            "reason": `${this.mafiaAgent2}, a disgruntled former Starbucks employee, asserts that she left the company well before the poisoning occurred 
                            and was nowhere near the location at the time. However, her animosity towards the victim and a history of confrontations suggest a possible 
                            motive for her involvement.
                            `
                        }
                    ]
                }
            }
            
        ]
    }
    generatePlot() {
        return {
            "mafiaAgent1": this.mafiaAgent1,
            "mafiaAgent2": this.mafiaAgent2,
            "players": this.players,
            "intro": this.getIntro(),
            "stage": this.getStages()
        };
    }
}
function createGamePlot(){
    let players = [
        "Ethan Sullivan",
        "Sophia Martinez",
        "Benjamin Reynolds",
        "Olivia Thompson",
        "Lucas Anderson",
        "Ava Wilson"
    ];

    const getRandomPLayer = () => {
        let randomIndex = Math.floor(Math.random() * 100 % players.length);
        return players[randomIndex];
    };

    // create the first mafia agent
    let mafiaAgent1 = getRandomPLayer();
    
    // remove mafia choice from player options
    players = players.filter(name => {
        return name !== mafiaAgent1;
    });

    // create the second mafia agent
    let mafiaAgent2 = getRandomPLayer();

    // remove mafia choice from player options
    players = players.filter(name => {
        return name !== mafiaAgent2;
    });

    // return the object
    return {
        "mafiaAgent1": mafiaAgent1,
        "mafiaAgent2": mafiaAgent2,
        "players": players,
        "intro": null,
        "stage": null
    };
}

console.log(new StoryLine().generatePlot())