let monsterData = null;
async function loadMonsterData() {
    if(monsterData === null) {
        monsterData = await fetch('/tool_data/data/monster.json').then(res => {
            if(res.status == 200) {
                return res.json();
            }
            return {
                'last_update': {
                    'version': '-',
                    'dv': '-',
                    'time': 0
                },
                'monster': {}
            };
        });
    }
}

const generateTooltipId = (function() {
    let incrementingId = 0;
    return function() {
        ++incrementingId;
        return `tooltip-${incrementingId}`;
    };
}());

function generateMonsterIcon(monsterId) {
    const image_base = '/tool_data/image/monster/';
    const tooltipId = generateTooltipId();
    const monsterName = getMonsterName(monsterId);
    return {
        'html': `<img src="${image_base}${monsterId}.png" alt="${monsterName}" onerror="this.src='${image_base}9999.png';" data-tooltip-id="${tooltipId}" /><div class="mdc-tooltip" id="${tooltipId}" role="tooltip" aria-hidden="true"><div class="mdc-tooltip__surface mdc-tooltip__surface-animation">${monsterName}</div></div>`,
        'tooltipId': tooltipId
    };
    // mdc.tooltip.MDCTooltip.attachTo(document.querySelector('div#'+result.tooltipId));
}

function getMonsterName(monsterId) {
    if(monsterId in monsterData.monster) {
        return monsterData.monster[monsterId].name;
    }
    return monsterData.monster[9999].name;
}
