const fs = require('fs');
const { dirname } = require('path');
const { Language: LM } = require('next-token-prediction');
const __root = dirname(require.main.filename);

const MyLanguageModel = async () => {
    const agent = await LM({
        files: [
            "war",
            "Moby-dick",
            'a-princess-of-mars',
            'art-in-theory',
            'babylonian-and-assyrian-a-history-of-akkadian',
            'brave-new-world',
            'cat-facts',
            'dangerous-connections',
            'david-copperfield',
            'design-of-wood-frame-structure-for-permanence',
            'elevator-systems-of-the-eiffel-tower',
            'fact-bot',
            'facts-and-sentences',
            'heart-of-darkness',
            'human-physiology',
            'jane-eyre-1',
            "le-fantome-de-l-opera",
            'legendary-islands-of-the-atlantic',
            'les-miserables',
            'pride-and-prejudice',
            'the-ambassadors',
            'the-phantom-of-the-opera',
            'the-true-story-of-lewis-and-clark',
            'the-wonderful-wizard-of-oz',
            'time-machine',
            'vie-de-boheme'


        ]
    });


};

MyLanguageModel();
