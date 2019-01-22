
        // "Dear, Mihail \
        // I write to you with a heavy heart and little hope for the future. But a few hours ago we finished our analysis of the recently \
        // discovered meteorological data. \
        // It is cold. It always has been and always shall be. The earth slumbers beneath sheets of ice, slowly drained of life as her children die upon the surface.",


var STORY = {

    entry : {

        description : [
        "It is cold. It always has been and always shall be. The earth slumbers beneath sheets of ice, as it has for centuries. \
        In this cruel age, what remains of mankind struggles to survive against a world bent on destroying it." ],

        options : [
            { 
                text : "Begin",
                goto : "first_scene"
            }
        ]
    },

    first_scene : {
        
        description : [
        "You open your eyes, waking from a short nap. The small room around you is gray, its walls of cut stone emanating cold. \
        A small table stands in the middle and on the other side of it Rusiqn, your comrade, still sleeps.\
        You edge closer to the fireplace and throw some more fuel onto it. As the flames come to life you feel the heat returning to your limbs.",
        
        "Roused by the crackling of the fire, Rusiqn wakes. For a few moments he stares into nothingness, blinking lazily.",

        "'You won't believe the dream I had', he says, stretching. 'I was back home and my mother had a pot on the fire, a big steaming pot full of \
        stew. And I mean real stew, not this canned crap,' he says, gesturing towards the remains of the lunch you had shared. 'I can still smell it.'",

        "With that he reached out, and proceeded to spoon up what little remained of the lunch. There was a sadness to his gestures \
        and he closed his eyes as he ate, as if trying to imagine a different taste. You are reminded of just how young he is, barely seventeen, \
        stuck alongside you in this desolate place at the ends of the earth.",

        "Noticing your stare he looks up from the can. 'What is it?'"
        ],

        options : [
            {
                text : "'You best get used to it. It won't get any easier.'",
                goto : "get_used_to_it"
            },
            {
                text : "'How did you end up here?'",
                goto : "rusiqn_how_here"
            }
        ]
    },

    get_used_to_it : {
        description : [
            "'You best get used to it. It won't get any easier,' you say.",
            "'I know it won't!' he says, defiantly. 'I didn't come here expecting a vacation.'"
        ],

        options : [
            // {
            //     text : "Continue",
            //     goto : "entry"
            // }
        ]
    },

    rusiqn_how_here : {
        description : [
            "'How did you even end up here?' you ask.",
            "'I wanted to be a soldier. Do my part.'",
            "'You know what I mean. They don't send rookies to this hellhole,' you say, and instantly regret it. \
            There is an unspoken rule at fort Edrine. You don't ask others why they're there and they do the same.",
            "He goes quiet for a moment and looks away.",
            "'I got into some trouble,' he says. The thought of it seems to trouble him, yet he looks at you \
            with a playful smile and a glint in his eys. 'I mean, didn't we all?'",
            "You nod.",
            "'What about you, sir? Why are you here?'",
            "'I...'"
        ],

        options : [
            // {
            //     text : "Continue",
            //     goto : "entry"
            // }
        ]
    }
};
