/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./resources/netlog_defs.ts
// TODO: Maybe bring in a helper library that can compile-time extract these keys instead?
const combatantMemoryKeys = ['CurrentWorldID', 'WorldID', 'WorldName', 'BNpcID', 'BNpcNameID', 'PartyType', 'ID', 'OwnerID', 'WeaponId', 'Type', 'Job', 'Level', 'Name', 'CurrentHP', 'MaxHP', 'CurrentMP', 'MaxMP', 'PosX', 'PosY', 'PosZ', 'Heading', 'MonsterType', 'Status', 'ModelStatus', 'AggressionStatus', 'TargetID', 'IsTargetable', 'Radius', 'Distance', 'EffectiveDistance', 'NPCTargetID', 'CurrentGP', 'MaxGP', 'CurrentCP', 'MaxCP', 'PCTargetID', 'IsCasting1', 'IsCasting2', 'CastBuffID', 'CastTargetID', 'CastDurationCurrent', 'CastDurationMax', 'TransformationId'];
const latestLogDefinitions = {
  GameLog: {
    type: '00',
    name: 'GameLog',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChatLog',
    fields: {
      type: 0,
      timestamp: 1,
      code: 2,
      name: 3,
      line: 4
    },
    subFields: {
      code: {
        '0039': {
          name: 'message',
          canAnonymize: true
        },
        '0038': {
          name: 'echo',
          canAnonymize: true
        },
        '0044': {
          name: 'dialog',
          canAnonymize: true
        },
        '0839': {
          name: 'message',
          canAnonymize: true
        }
      }
    },
    firstOptionalField: undefined
  },
  ChangeZone: {
    type: '01',
    name: 'ChangeZone',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Territory',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ChangedPlayer: {
    type: '02',
    name: 'ChangedPlayer',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangePrimaryPlayer',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    playerIds: {
      2: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  AddedCombatant: {
    type: '03',
    name: 'AddedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AddCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      ownerId: 6,
      worldId: 7,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // maxTp: 15,
      // tp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  RemovedCombatant: {
    type: '04',
    name: 'RemovedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'RemoveCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      owner: 6,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      hp: 12,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  PartyList: {
    type: '11',
    name: 'PartyList',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PartyList',
    fields: {
      type: 0,
      timestamp: 1,
      partyCount: 2,
      id0: 3,
      id1: 4,
      id2: 5,
      id3: 6,
      id4: 7,
      id5: 8,
      id6: 9,
      id7: 10,
      id8: 11,
      id9: 12,
      id10: 13,
      id11: 14,
      id12: 15,
      id13: 16,
      id14: 17,
      id15: 18,
      id16: 19,
      id17: 20,
      id18: 21,
      id19: 22,
      id20: 23,
      id21: 24,
      id22: 25,
      id23: 26
    },
    playerIds: {
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null
    },
    firstOptionalField: 3,
    canAnonymize: true,
    lastInclude: true
  },
  PlayerStats: {
    type: '12',
    name: 'PlayerStats',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PlayerStats',
    fields: {
      type: 0,
      timestamp: 1,
      job: 2,
      strength: 3,
      dexterity: 4,
      vitality: 5,
      intelligence: 6,
      mind: 7,
      piety: 8,
      attackPower: 9,
      directHit: 10,
      criticalHit: 11,
      attackMagicPotency: 12,
      healMagicPotency: 13,
      determination: 14,
      skillSpeed: 15,
      spellSpeed: 16,
      tenacity: 18,
      localContentId: 19
    },
    canAnonymize: true,
    lastInclude: true,
    firstOptionalField: undefined
  },
  StartsUsing: {
    type: '20',
    name: 'StartsUsing',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StartsCasting',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      castTime: 8,
      x: 9,
      y: 10,
      z: 11,
      heading: 12
    },
    possibleRsvFields: [5],
    blankFields: [6],
    playerIds: {
      2: 3,
      6: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Ability: {
    type: '21',
    name: 'Ability',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46
    },
    possibleRsvFields: [5],
    playerIds: {
      2: 3,
      6: 7
    },
    blankFields: [6],
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkAOEAbility: {
    type: '22',
    name: 'NetworkAOEAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AOEActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46
    },
    possibleRsvFields: [5],
    playerIds: {
      2: 3,
      6: 7
    },
    blankFields: [6],
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkCancelAbility: {
    type: '23',
    name: 'NetworkCancelAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'CancelAction',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      name: 5,
      reason: 6
    },
    possibleRsvFields: [5],
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkDoT: {
    type: '24',
    name: 'NetworkDoT',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'DoTHoT',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      which: 4,
      effectId: 5,
      damage: 6,
      currentHp: 7,
      maxHp: 8,
      currentMp: 9,
      maxMp: 10,
      // currentTp: 11,
      // maxTp: 12,
      x: 13,
      y: 14,
      z: 15,
      heading: 16,
      sourceId: 17,
      source: 18,
      // An id number lookup into the AttackType table
      damageType: 19,
      sourceCurrentHp: 20,
      sourceMaxHp: 21,
      sourceCurrentMp: 22,
      sourceMaxMp: 23,
      // sourceCurrentTp: 24,
      // sourceMaxTp: 25,
      sourceX: 26,
      sourceY: 27,
      sourceZ: 28,
      sourceHeading: 29
    },
    playerIds: {
      2: 3,
      17: 18
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  WasDefeated: {
    type: '25',
    name: 'WasDefeated',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Death',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      sourceId: 4,
      source: 5
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  GainsEffect: {
    type: '26',
    name: 'GainsEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusAdd',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      duration: 4,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9,
      targetMaxHp: 10,
      sourceMaxHp: 11
    },
    possibleRsvFields: [3],
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  HeadMarker: {
    type: '27',
    name: 'HeadMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'TargetIcon',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      id: 6
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkRaidMarker: {
    type: '28',
    name: 'NetworkRaidMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'WaymarkMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      waymark: 3,
      id: 4,
      name: 5,
      x: 6,
      y: 7,
      z: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkTargetMarker: {
    type: '29',
    name: 'NetworkTargetMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SignMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      // Add, Update, Delete
      waymark: 3,
      id: 4,
      name: 5,
      targetId: 6,
      targetName: 7
    },
    playerIds: {
      4: null,
      5: null
    },
    firstOptionalField: undefined
  },
  LosesEffect: {
    type: '30',
    name: 'LosesEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusRemove',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9
    },
    possibleRsvFields: [3],
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkGauge: {
    type: '31',
    name: 'NetworkGauge',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Gauge',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      data0: 3,
      data1: 4,
      data2: 5,
      data3: 6
    },
    playerIds: {
      2: null
    },
    // Sometimes this last field looks like a player id.
    // For safety, anonymize all of the gauge data.
    firstUnknownField: 3,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkWorld: {
    type: '32',
    name: 'NetworkWorld',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'World',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  ActorControl: {
    type: '33',
    name: 'ActorControl',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Director',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      command: 3,
      data0: 4,
      data1: 5,
      data2: 6,
      data3: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NameToggle: {
    type: '34',
    name: 'NameToggle',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'NameToggle',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      targetId: 4,
      targetName: 5,
      toggle: 6
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Tether: {
    type: '35',
    name: 'Tether',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Tether',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      targetId: 4,
      target: 5,
      id: 8
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstUnknownField: 9,
    firstOptionalField: undefined
  },
  LimitBreak: {
    type: '36',
    name: 'LimitBreak',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'LimitBreak',
    fields: {
      type: 0,
      timestamp: 1,
      valueHex: 2,
      bars: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkEffectResult: {
    type: '37',
    name: 'NetworkEffectResult',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'EffectResult',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      sequenceId: 4,
      currentHp: 5,
      maxHp: 6,
      currentMp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14
    },
    playerIds: {
      2: 3
    },
    firstUnknownField: 22,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StatusEffect: {
    type: '38',
    name: 'StatusEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      jobLevelData: 4,
      hp: 5,
      maxHp: 6,
      mp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14,
      data0: 15,
      data1: 16,
      data2: 17,
      data3: 18,
      data4: 19,
      data5: 20
      // Variable number of triplets here, but at least one.
    },

    playerIds: {
      2: 3
    },
    firstUnknownField: 18,
    canAnonymize: true,
    firstOptionalField: 18
  },
  NetworkUpdateHP: {
    type: '39',
    name: 'NetworkUpdateHP',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'UpdateHp',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      currentHp: 4,
      maxHp: 5,
      currentMp: 6,
      maxMp: 7,
      // currentTp: 8,
      // maxTp: 9,
      x: 10,
      y: 11,
      z: 12,
      heading: 13
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Map: {
    type: '40',
    name: 'Map',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangeMap',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      regionName: 3,
      placeName: 4,
      placeNameSub: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    lastInclude: true
  },
  SystemLogMessage: {
    type: '41',
    name: 'SystemLogMessage',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SystemLogMessage',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      id: 3,
      param0: 4,
      param1: 5,
      param2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StatusList3: {
    type: '42',
    name: 'StatusList3',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList3',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
      // triplets of fields from here (effectId, data, playerId)?
    },

    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: 4,
    firstUnknownField: 4
  },
  ParserInfo: {
    type: '249',
    name: 'ParserInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Settings',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ProcessInfo: {
    type: '250',
    name: 'ProcessInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Process',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Debug: {
    type: '251',
    name: 'Debug',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Debug',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: false,
    firstOptionalField: undefined
  },
  PacketDump: {
    type: '252',
    name: 'PacketDump',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PacketDump',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  Version: {
    type: '253',
    name: 'Version',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Version',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Error: {
    type: '254',
    name: 'Error',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Error',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  None: {
    type: '[0-9]+',
    name: 'None',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'None',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  // OverlayPlugin log lines
  LineRegistration: {
    type: '256',
    name: 'LineRegistration',
    source: 'OverlayPlugin',
    messageType: '256',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      source: 3,
      version: 4
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  MapEffect: {
    type: '257',
    name: 'MapEffect',
    source: 'OverlayPlugin',
    messageType: '257',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      flags: 3,
      // values for the location field seem to vary between instances
      // (e.g. a location of '08' in P5S does not appear to be the same location in P5S as in P6S)
      // but this field does appear to consistently contain position info for the effect rendering
      location: 4,
      data0: 5,
      data1: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  FateDirector: {
    type: '258',
    name: 'FateDirector',
    source: 'OverlayPlugin',
    messageType: '258',
    // fateId and progress are in hex.
    fields: {
      type: 0,
      timestamp: 1,
      category: 2,
      // padding0: 3,
      fateId: 4,
      progress: 5
      // param3: 6,
      // param4: 7,
      // param5: 8,
      // param6: 9,
      // padding1: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  CEDirector: {
    type: '259',
    name: 'CEDirector',
    source: 'OverlayPlugin',
    messageType: '259',
    // all fields are in hex
    fields: {
      type: 0,
      timestamp: 1,
      popTime: 2,
      timeRemaining: 3,
      // unknown0: 4,
      ceKey: 5,
      numPlayers: 6,
      status: 7,
      // unknown1: 8,
      progress: 9
      // unknown2: 10,
      // unknown3: 11,
      // unknown4: 12,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  InCombat: {
    type: '260',
    name: 'InCombat',
    source: 'OverlayPlugin',
    messageType: '260',
    fields: {
      type: 0,
      timestamp: 1,
      inACTCombat: 2,
      inGameCombat: 3,
      isACTChanged: 4,
      isGameChanged: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  CombatantMemory: {
    type: '261',
    name: 'CombatantMemory',
    source: 'OverlayPlugin',
    messageType: '261',
    fields: {
      type: 0,
      timestamp: 1,
      change: 2,
      id: 3
      // from here, pairs of field name/values
    },

    canAnonymize: true,
    firstOptionalField: 5,
    // TODO: fix this data structure and anonymizer to be able to handle repeatingFields.
    // At the very least, Name and PCTargetID need to be anonymized as well.
    firstUnknownField: 4,
    playerIds: {
      3: null
    },
    repeatingFields: {
      startingIndex: 4,
      label: 'pair',
      names: ['key', 'value'],
      sortKeys: true,
      primaryKey: 'key',
      possibleKeys: combatantMemoryKeys
    }
  },
  RSVData: {
    type: '262',
    name: 'RSVData',
    source: 'OverlayPlugin',
    messageType: '262',
    fields: {
      type: 0,
      timestamp: 1,
      locale: 2,
      // unknown0: 3,
      key: 4,
      value: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StartsUsingExtra: {
    type: '263',
    name: 'StartsUsingExtra',
    source: 'OverlayPlugin',
    messageType: '263',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      x: 4,
      y: 5,
      z: 6,
      heading: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: 7
  },
  AbilityExtra: {
    type: '264',
    name: 'AbilityExtra',
    source: 'OverlayPlugin',
    messageType: '264',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      globalEffectCounter: 4,
      dataFlag: 5,
      x: 6,
      y: 7,
      z: 8,
      heading: 9
    },
    blankFields: [6],
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: 9
  }
};
const logDefinitionsVersions = {
  'latest': latestLogDefinitions
};

// Verify that this has the right type, but export `as const`.
const assertLogDefinitions = logDefinitionsVersions;
console.assert(assertLogDefinitions);
/* harmony default export */ const netlog_defs = (logDefinitionsVersions['latest']);
;// CONCATENATED MODULE: ./resources/not_reached.ts
// Helper Error for TypeScript situations where the programmer thinks they
// know better than TypeScript that some situation will never occur.

// The intention here is that the programmer does not expect a particular
// bit of code to happen, and so has not written careful error handling.
// If it does occur, at least there will be an error and we can figure out why.
// This is preferable to casting or disabling TypeScript altogether in order to
// avoid syntax errors.

// One common example is a regex, where if the regex matches then all of the
// (non-optional) regex groups will also be valid, but TypeScript doesn't know.
class UnreachableCode extends Error {
  constructor() {
    super('This code shouldn\'t be reached');
  }
}
;// CONCATENATED MODULE: ./resources/regexes.ts


const separator = ':';
const matchDefault = '[^:]*';
const matchWithColonsDefault = '(?:[^:]|: )*?';
const fieldsWithPotentialColons = ['effect', 'ability'];
const defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const parseHelper = (params, defKey, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, defKey, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // Special case for Ability to handle aoe and non-aoe.
  const abilityMessageType = `(?:${netlog_defs.Ability.messageType}|${netlog_defs.NetworkAOEAbility.messageType})`;
  const abilityHexCode = '(?:15|16)';

  // Build the regex from the fields.
  const prefix = defKey !== 'Ability' ? netlog_defs[defKey].messageType : abilityMessageType;

  // Hex codes are a minimum of two characters.  Abilities are special because
  // they need to support both 0x15 and 0x16.
  const typeAsHex = parseInt(netlog_defs[defKey].type).toString(16).toUpperCase();
  const defaultHexCode = typeAsHex.length < 2 ? `00${typeAsHex}`.slice(-2) : typeAsHex;
  const hexCode = defKey !== 'Ability' ? defaultHexCode : abilityHexCode;
  let str = '';
  if (capture) str += `(?<timestamp>\\y{Timestamp}) ${prefix} (?<type>${hexCode})`;else str += `\\y{Timestamp} ${prefix} ${hexCode}`;
  let lastKey = 1;
  for (const keyStr in fields) {
    const parseField = fields[keyStr];
    if (parseField === undefined) continue;
    const fieldName = parseField.field;

    // Regex handles these manually above in the `str` initialization.
    if (fieldName === 'timestamp' || fieldName === 'type') continue;
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += `${separator}${matchDefault}`;else if (missingFields > 1) str += `(?:${separator}${matchDefault}){${missingFields}}`;
    lastKey = key;
    str += separator;
    if (typeof parseField !== 'object') throw new Error(`${defKey}: invalid value: ${JSON.stringify(parseField)}`);
    const fieldDefault = fieldName !== undefined && fieldsWithPotentialColons.includes(fieldName) ? matchWithColonsDefault : matchDefault;
    const defaultFieldValue = parseField.value?.toString() ?? fieldDefault;
    const fieldValue = params[fieldName];
    if (isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      const repeatingFieldsSeparator = '(?:$|:)';
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = matchDefault;else if (val.length < 1) val = matchDefault;else if (val.some(v => typeof v !== 'string')) val = matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + repeatingFieldsSeparator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue);
      } else {
        str += fieldValue;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  str += '(?:$|:)';
  return Regexes.parse(str);
};
const buildRegex = (type, params) => {
  return parseHelper(params, type, defaultParams(type, Regexes.logVersion));
};
class Regexes {
  static logVersion = 'latest';

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return buildRegex('Ability', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return parseHelper(params, 'AddedCombatant', defaultParams('AddedCombatant', Regexes.logVersion, ['type', 'timestamp', 'id', 'name']));
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatantFull(params) {
    return buildRegex('AddedCombatant', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0038';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0044';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0839';
    return Regexes.gameLog(params);
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return buildRegex('AbilityExtra', params);
  }

  /**
   * Helper function for building named capture group
   */
  static maybeCapture(capture, name, value, defaultValue) {
    if (value === undefined) value = defaultValue ?? matchDefault;
    value = Regexes.anyOf(value);
    return capture ? Regexes.namedCapture(name, value) : value;
  }
  static optional(str) {
    return `(?:${str})?`;
  }

  // Creates a named regex capture group named |name| for the match |value|.
  static namedCapture(name, value) {
    if (name.includes('>')) console.error(`"${name}" contains ">".`);
    if (name.includes('<')) console.error(`"${name}" contains ">".`);
    return `(?<${name}>${value})`;
  }

  /**
   * Convenience for turning multiple args into a unioned regular expression.
   * anyOf(x, y, z) or anyOf([x, y, z]) do the same thing, and return (?:x|y|z).
   * anyOf(x) or anyOf(x) on its own simplifies to just x.
   * args may be strings or RegExp, although any additional markers to RegExp
   * like /insensitive/i are dropped.
   */
  static anyOf(...args) {
    const anyOfArray = array => {
      const [elem] = array;
      if (elem !== undefined && array.length === 1) return `${elem instanceof RegExp ? elem.source : elem}`;
      return `(?:${array.map(elem => elem instanceof RegExp ? elem.source : elem).join('|')})`;
    };
    let array = [];
    const [firstArg] = args;
    if (args.length === 1) {
      if (typeof firstArg === 'string' || firstArg instanceof RegExp) array = [firstArg];else if (Array.isArray(firstArg)) array = firstArg;else array = [];
    } else {
      // TODO: more accurate type instead of `as` cast
      array = args;
    }
    return anyOfArray(array);
  }
  static parse(regexpString) {
    const kCactbotCategories = {
      Timestamp: '^.{14}',
      NetTimestamp: '.{33}',
      NetField: '(?:[^|]*\\|)',
      LogType: '[0-9A-Fa-f]{2}',
      AbilityCode: '[0-9A-Fa-f]{1,8}',
      ObjectId: '[0-9A-F]{8}',
      // Matches any character name (including empty strings which the FFXIV
      // ACT plugin can generate when unknown).
      Name: '(?:[^\\s:|]+(?: [^\\s:|]+)?|)',
      // Floats can have comma as separator in FFXIV plugin output: https://github.com/ravahn/FFXIV_ACT_Plugin/issues/137
      Float: '-?[0-9]+(?:[.,][0-9]+)?(?:E-?[0-9]+)?'
    };

    // All regexes in cactbot are case insensitive.
    // This avoids headaches as things like `Vice and Vanity` turns into
    // `Vice And Vanity`, especially for French and German.  It appears to
    // have a ~20% regex parsing overhead, but at least they work.
    let modifiers = 'i';
    if (regexpString instanceof RegExp) {
      modifiers += (regexpString.global ? 'g' : '') + (regexpString.multiline ? 'm' : '');
      regexpString = regexpString.source;
    }
    regexpString = regexpString.replace(/\\y\{(.*?)\}/g, (match, group) => {
      return kCactbotCategories[group] || match;
    });
    return new RegExp(regexpString, modifiers);
  }

  // Like Regex.Regexes.parse, but force global flag.
  static parseGlobal(regexpString) {
    const regex = Regexes.parse(regexpString);
    let modifiers = 'gi';
    if (regexpString instanceof RegExp) modifiers += regexpString.multiline ? 'm' : '';
    return new RegExp(regex.source, modifiers);
  }
  static trueIfUndefined(value) {
    if (typeof value === 'undefined') return true;
    return !!value;
  }
  static validateParams(f, funcName, params) {
    if (f === null) return;
    if (typeof f !== 'object') return;
    const keys = Object.keys(f);
    for (const key of keys) {
      if (!params.includes(key)) {
        throw new Error(`${funcName}: invalid parameter '${key}'.  ` + `Valid params: ${JSON.stringify(params)}`);
      }
    }
  }
}
;// CONCATENATED MODULE: ./resources/netregexes.ts



const netregexes_separator = '\\|';
const netregexes_matchDefault = '[^|]*';

// If NetRegexes.setFlagTranslationsNeeded is set to true, then any
// regex created that requires a translation will begin with this string
// and match the magicStringRegex.  This is maybe a bit goofy, but is
// a pretty straightforward way to mark regexes for translations.
// If issue #1306 is ever resolved, we can remove this.
const magicTranslationString = `^^`;
const magicStringRegex = /^\^\^/;

// can't simply export this, see https://github.com/quisquous/cactbot/pull/4957#discussion_r1002590589
const keysThatRequireTranslationAsConst = ['ability', 'name', 'source', 'target', 'line'];
const keysThatRequireTranslation = keysThatRequireTranslationAsConst;
const gameLogCodes = {
  echo: '0038',
  dialog: '0044',
  message: '0839'
};
const netregexes_defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const netregexes_isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const netregexes_parseHelper = (params, funcName, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, funcName, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // For testing, it's useful to know if this is a regex that requires
  // translation.  We test this by seeing if there are any specified
  // fields, and if so, inserting a magic string that we can detect.
  // This lets us differentiate between "regex that should be translated"
  // e.g. a regex with `target` specified, and "regex that shouldn't"
  // e.g. a gains effect with just effectId specified.
  const transParams = Object.keys(params).filter(k => keysThatRequireTranslation.includes(k));
  const needsTranslations = NetRegexes.flagTranslationsNeeded && transParams.length > 0;

  // Build the regex from the fields.
  let str = needsTranslations ? magicTranslationString : '^';
  let lastKey = -1;
  for (const keyStr in fields) {
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += '\\y{NetField}';else if (missingFields > 1) str += `\\y{NetField}{${missingFields}}`;
    lastKey = key;
    const value = fields[keyStr];
    if (typeof value !== 'object') throw new Error(`${funcName}: invalid value: ${JSON.stringify(value)}`);
    const fieldName = value.field;
    const defaultFieldValue = value.value?.toString() ?? netregexes_matchDefault;
    const fieldValue = params[fieldName];
    if (netregexes_isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = netregexes_matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = netregexes_matchDefault;else if (val.length < 1) val = netregexes_matchDefault;else if (val.some(v => typeof v !== 'string')) val = netregexes_matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + netregexes_separator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue) + netregexes_separator;
      } else {
        str += defaultFieldValue + netregexes_separator;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  return Regexes.parse(str);
};
const netregexes_buildRegex = (type, params) => {
  return netregexes_parseHelper(params, type, netregexes_defaultParams(type, NetRegexes.logVersion));
};
class NetRegexes {
  static logVersion = 'latest';
  static flagTranslationsNeeded = false;
  static setFlagTranslationsNeeded(value) {
    NetRegexes.flagTranslationsNeeded = value;
  }
  static doesNetRegexNeedTranslation(regex) {
    // Need to `setFlagTranslationsNeeded` before calling this function.
    console.assert(NetRegexes.flagTranslationsNeeded);
    const str = typeof regex === 'string' ? regex : regex.source;
    return !!magicStringRegex.exec(str);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return netregexes_buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return netregexes_parseHelper(params, 'Ability', {
      ...netregexes_defaultParams('Ability', NetRegexes.logVersion),
      // Override type
      0: {
        field: 'type',
        value: '2[12]',
        optional: false
      }
    });
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return netregexes_buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return netregexes_parseHelper(params, 'AddedCombatant', netregexes_defaultParams('AddedCombatant', NetRegexes.logVersion));
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   * @deprecated Use `addedCombatant` instead
   */
  static addedCombatantFull(params) {
    return NetRegexes.addedCombatant(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return netregexes_buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return netregexes_buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return netregexes_buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return netregexes_buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return netregexes_buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return netregexes_buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return netregexes_buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.echo
    });
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.dialog
    });
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.message
    });
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return netregexes_buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return NetRegexes.gameLog(params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return netregexes_buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return netregexes_buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return netregexes_buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return netregexes_buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return netregexes_buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return netregexes_buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return netregexes_buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return netregexes_buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return netregexes_buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return netregexes_buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return netregexes_buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return netregexes_buildRegex('AbilityExtra', params);
  }
}
const commonNetRegex = {
  // TODO(6.2): remove 40000010 after everybody is on 6.2.
  // TODO: or maybe keep around for playing old log files??
  wipe: NetRegexes.network6d({
    command: ['40000010', '4000000F']
  }),
  cactbotWipeEcho: NetRegexes.echo({
    line: 'cactbot wipe.*?'
  }),
  userWipeEcho: NetRegexes.echo({
    line: 'end'
  })
};
const buildNetRegexForTrigger = (type, params) => {
  if (type === 'Ability')
    // ts can't narrow T to `Ability` here, need casting.
    return NetRegexes.ability(params);
  return netregexes_buildRegex(type, params);
};
;// CONCATENATED MODULE: ./resources/overlay_plugin_api.ts
// OverlayPlugin API setup

let inited = false;
let wsUrl = null;
let ws = null;
let queue = [];
let rseqCounter = 0;
const responsePromises = {};
const subscribers = {};
const sendMessage = (msg, cb) => {
  if (ws) {
    if (queue) queue.push(msg);else ws.send(JSON.stringify(msg));
  } else {
    if (queue) queue.push([msg, cb]);else window.OverlayPluginApi.callHandler(JSON.stringify(msg), cb);
  }
};
const processEvent = msg => {
  init();
  const subs = subscribers[msg.type];
  subs?.forEach(sub => {
    try {
      sub(msg);
    } catch (e) {
      console.error(e);
    }
  });
};
const dispatchOverlayEvent = processEvent;
const addOverlayListener = (event, cb) => {
  init();
  if (!subscribers[event]) {
    subscribers[event] = [];
    if (!queue) {
      sendMessage({
        call: 'subscribe',
        events: [event]
      });
    }
  }
  subscribers[event]?.push(cb);
};
const removeOverlayListener = (event, cb) => {
  init();
  if (subscribers[event]) {
    const list = subscribers[event];
    const pos = list?.indexOf(cb);
    if (pos !== undefined && pos > -1) list?.splice(pos, 1);
  }
};
const callOverlayHandlerInternal = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();
  const msg = {
    ..._msg,
    rseq: 0
  };
  let p;
  if (ws) {
    msg.rseq = rseqCounter++;
    p = new Promise((resolve, reject) => {
      responsePromises[msg.rseq] = {
        resolve: resolve,
        reject: reject
      };
    });
    sendMessage(msg);
  } else {
    p = new Promise((resolve, reject) => {
      sendMessage(msg, data => {
        if (data === null) {
          resolve(data);
          return;
        }
        const parsed = JSON.parse(data);
        if (parsed['$error']) reject(parsed);else resolve(parsed);
      });
    });
  }
  return p;
};
const callOverlayHandlerOverrideMap = {};
const callOverlayHandler = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();

  // If this `as` is incorrect, then it will not find an override.
  // TODO: we could also replace this with a type guard.
  const type = _msg.call;
  const callFunc = callOverlayHandlerOverrideMap[type] ?? callOverlayHandlerInternal;

  // The `IOverlayHandler` type guarantees that parameters/return type match
  // one of the overlay handlers.  The OverrideMap also only stores functions
  // that match by the discriminating `call` field, and so any overrides
  // should be correct here.
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
  return callFunc(_msg);
};
const setOverlayHandlerOverride = (type, override) => {
  if (!override) {
    delete callOverlayHandlerOverrideMap[type];
    return;
  }
  callOverlayHandlerOverrideMap[type] = override;
};
const init = () => {
  if (inited) return;
  if (typeof window !== 'undefined') {
    wsUrl = new URLSearchParams(window.location.search).get('OVERLAY_WS');
    if (wsUrl !== null) {
      const connectWs = function (wsUrl) {
        ws = new WebSocket(wsUrl);
        ws.addEventListener('error', e => {
          console.error(e);
        });
        ws.addEventListener('open', () => {
          console.log('Connected!');
          const q = queue ?? [];
          queue = null;
          sendMessage({
            call: 'subscribe',
            events: Object.keys(subscribers)
          });
          for (const msg of q) {
            if (!Array.isArray(msg)) sendMessage(msg);
          }
        });
        ws.addEventListener('message', _msg => {
          try {
            if (typeof _msg.data !== 'string') {
              console.error('Invalid message data received: ', _msg);
              return;
            }
            const msg = JSON.parse(_msg.data);
            const promiseFuncs = msg?.rseq !== undefined ? responsePromises[msg.rseq] : undefined;
            if (msg.rseq !== undefined && promiseFuncs) {
              if (msg['$error']) promiseFuncs.reject(msg);else promiseFuncs.resolve(msg);
              delete responsePromises[msg.rseq];
            } else {
              processEvent(msg);
            }
          } catch (e) {
            console.error('Invalid message received: ', _msg);
            return;
          }
        });
        ws.addEventListener('close', () => {
          queue = null;
          console.log('Trying to reconnect...');
          // Don't spam the server with retries.
          window.setTimeout(() => {
            connectWs(wsUrl);
          }, 300);
        });
      };
      connectWs(wsUrl);
    } else {
      const waitForApi = function () {
        if (!window.OverlayPluginApi?.ready) {
          window.setTimeout(waitForApi, 300);
          return;
        }
        const q = queue ?? [];
        queue = null;
        window.__OverlayCallback = processEvent;
        sendMessage({
          call: 'subscribe',
          events: Object.keys(subscribers)
        });
        for (const item of q) {
          if (Array.isArray(item)) sendMessage(item[0], item[1]);
        }
      };
      waitForApi();
    }

    // Here the OverlayPlugin API is registered to the window object,
    // but this is mainly for backwards compatibility.For cactbot's built-in files,
    // it is recommended to use the various functions exported in resources/overlay_plugin_api.ts.
    window.addOverlayListener = addOverlayListener;
    window.removeOverlayListener = removeOverlayListener;
    window.callOverlayHandler = callOverlayHandler;
    window.dispatchOverlayEvent = dispatchOverlayEvent;
  }
  inited = true;
};
;// CONCATENATED MODULE: ./ui/test/test.ts



addOverlayListener('ChangeZone', e => {
  const currentZone = document.getElementById('currentZone');
  if (currentZone) currentZone.innerText = `currentZone: ${e.zoneName} (${e.zoneID})`;
});
addOverlayListener('onInCombatChangedEvent', e => {
  const inCombat = document.getElementById('inCombat');
  if (inCombat) {
    inCombat.innerText = `inCombat: act: ${e.detail.inACTCombat ? 'yes' : 'no'} game: ${e.detail.inGameCombat ? 'yes' : 'no'}`;
  }
});
addOverlayListener('onPlayerChangedEvent', e => {
  const name = document.getElementById('name');
  if (name) name.innerText = e.detail.name;
  const playerId = document.getElementById('playerId');
  if (playerId) playerId.innerText = e.detail.id.toString(16);
  const hp = document.getElementById('hp');
  if (hp) hp.innerText = `${e.detail.currentHP}/${e.detail.maxHP} (${e.detail.currentShield})`;
  const mp = document.getElementById('mp');
  if (mp) mp.innerText = `${e.detail.currentMP}/${e.detail.maxMP}`;
  const cp = document.getElementById('cp');
  if (cp) cp.innerText = `${e.detail.currentCP}/${e.detail.maxCP}`;
  const gp = document.getElementById('gp');
  if (gp) gp.innerText = `${e.detail.currentGP}/${e.detail.maxGP}`;
  const job = document.getElementById('job');
  if (job) job.innerText = `${e.detail.level} ${e.detail.job}`;
  const debug = document.getElementById('debug');
  if (debug) debug.innerText = e.detail.debugJob;
  const jobInfo = document.getElementById('jobinfo');
  if (jobInfo) {
    const detail = e.detail;
    if (detail.job === 'RDM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.whiteMana} | ${detail.jobDetail.blackMana} | ${detail.jobDetail.manaStacks}`;
    } else if (detail.job === 'WAR' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.beast.toString();
    } else if (detail.job === 'DRK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.blood} | ${detail.jobDetail.darksideMilliseconds} | ${detail.jobDetail.darkArts.toString()} | ${detail.jobDetail.livingShadowMilliseconds}`;
    } else if (detail.job === 'GNB' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.cartridges} | ${detail.jobDetail.continuationState}`;
    } else if (detail.job === 'PLD' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.oath.toString();
    } else if (detail.job === 'BRD' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.songName} | ${detail.jobDetail.lastPlayed} | ${detail.jobDetail.songProcs} | ${detail.jobDetail.soulGauge} | ${detail.jobDetail.songMilliseconds} | [${detail.jobDetail.coda.join(', ')}]`;
    } else if (detail.job === 'DNC' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.feathers} | ${detail.jobDetail.esprit} | [${detail.jobDetail.steps.join(', ')}] | ${detail.jobDetail.currentStep}`;
    } else if (detail.job === 'NIN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.hutonMilliseconds} | ${detail.jobDetail.ninkiAmount}`;
    } else if (detail.job === 'DRG' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.bloodMilliseconds} | ${detail.jobDetail.lifeMilliseconds} | ${detail.jobDetail.eyesAmount} | ${detail.jobDetail.firstmindsFocus}`;
    } else if (detail.job === 'BLM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds}) | ${detail.jobDetail.umbralHearts} | ${detail.jobDetail.polyglot} ${detail.jobDetail.enochian.toString()} (${detail.jobDetail.nextPolyglotMilliseconds}) | ${detail.jobDetail.paradox.toString()}`;
    } else if (detail.job === 'THM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds})`;
    } else if (detail.job === 'WHM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.lilyStacks} (${detail.jobDetail.lilyMilliseconds}) | ${detail.jobDetail.bloodlilyStacks}`;
    } else if (detail.job === 'SMN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.tranceMilliseconds} | ${detail.jobDetail.attunement} | ${detail.jobDetail.attunementMilliseconds} | ${detail.jobDetail.activePrimal ?? '-'} | [${detail.jobDetail.usableArcanum.join(', ')}] | ${detail.jobDetail.nextSummoned}`;
    } else if (detail.job === 'SCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.fairyGauge} | ${detail.jobDetail.fairyStatus} (${detail.jobDetail.fairyMilliseconds})`;
    } else if (detail.job === 'ACN' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.aetherflowStacks.toString();
    } else if (detail.job === 'AST' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heldCard} | ${detail.jobDetail.crownCard} | [${detail.jobDetail.arcanums.join(', ')}]`;
    } else if (detail.job === 'MNK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.chakraStacks} | ${detail.jobDetail.lunarNadi.toString()} | ${detail.jobDetail.solarNadi.toString()} | [${detail.jobDetail.beastChakra.join(', ')}]`;
    } else if (detail.job === 'MCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heat} (${detail.jobDetail.overheatMilliseconds}) | ${detail.jobDetail.battery} (${detail.jobDetail.batteryMilliseconds}) | last: ${detail.jobDetail.lastBatteryAmount} | ${detail.jobDetail.overheatActive.toString()} | ${detail.jobDetail.robotActive.toString()}`;
    } else if (detail.job === 'SAM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.kenki} | ${detail.jobDetail.meditationStacks}(${detail.jobDetail.setsu.toString()},${detail.jobDetail.getsu.toString()},${detail.jobDetail.ka.toString()})`;
    } else if (detail.job === 'SGE' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.addersgall} (${detail.jobDetail.addersgallMilliseconds}) | ${detail.jobDetail.addersting} | ${detail.jobDetail.eukrasia.toString()}`;
    } else if (detail.job === 'RPR' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.soul} | ${detail.jobDetail.shroud} | ${detail.jobDetail.enshroudMilliseconds} | ${detail.jobDetail.lemureShroud} | ${detail.jobDetail.voidShroud}`;
    } else {
      jobInfo.innerText = '';
    }
  }
  const pos = document.getElementById('pos');
  if (pos) {
    pos.innerText = `${e.detail.pos.x.toFixed(2)},${e.detail.pos.y.toFixed(2)},${e.detail.pos.z.toFixed(2)}`;
  }
  const rotation = document.getElementById('rotation');
  if (rotation) rotation.innerText = e.detail.rotation.toString();
  const bait = document.getElementById('bait');
  if (bait) bait.innerText = e.detail.bait.toString();
});
addOverlayListener('EnmityTargetData', e => {
  const target = document.getElementById('target');
  if (target) target.innerText = e.Target ? e.Target.Name : '--';
  const tid = document.getElementById('tid');
  if (tid) tid.innerText = e.Target ? e.Target.ID.toString(16) : '';
  const tdistance = document.getElementById('tdistance');
  if (tdistance) tdistance.innerText = e.Target ? e.Target.Distance.toString() : '';
});
addOverlayListener('onGameExistsEvent', _e => {
  // console.log("Game exists: " + e.detail.exists);
});
addOverlayListener('onGameActiveChangedEvent', _e => {
  // console.log("Game active: " + e.detail.active);
});
const ttsEchoRegex = NetRegexes.echo({
  line: 'tts:.*?'
});
addOverlayListener('LogLine', e => {
  // Match "/echo tts:<stuff>"
  const line = ttsEchoRegex.exec(e.rawLine)?.groups?.line;
  if (line === undefined) return;
  const colon = line.indexOf(':');
  if (colon === -1) return;
  const text = line.slice(colon);
  if (text !== undefined) {
    void callOverlayHandler({
      call: 'cactbotSay',
      text: text
    });
  }
});
addOverlayListener('onUserFileChanged', e => {
  console.log(`User file ${e.file} changed!`);
});
void callOverlayHandler({
  call: 'cactbotRequestState'
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NhY3Rib3QvLi9yZXNvdXJjZXMvbmV0bG9nX2RlZnMudHMiLCJ3ZWJwYWNrOi8vY2FjdGJvdC8uL3Jlc291cmNlcy9ub3RfcmVhY2hlZC50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL3JlZ2V4ZXMudHMiLCJ3ZWJwYWNrOi8vY2FjdGJvdC8uL3Jlc291cmNlcy9uZXRyZWdleGVzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvb3ZlcmxheV9wbHVnaW5fYXBpLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi91aS90ZXN0L3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1Z2luQ29tYmF0YW50U3RhdGUgfSBmcm9tICcuLi90eXBlcy9ldmVudCc7XHJcbmltcG9ydCB7IE5ldEZpZWxkc1JldmVyc2UgfSBmcm9tICcuLi90eXBlcy9uZXRfZmllbGRzJztcclxuXHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb24gPSB7XHJcbiAgLy8gVGhlIGxvZyBpZCwgYXMgYSBkZWNpbWFsIHN0cmluZywgbWluaW11bSB0d28gY2hhcmFjdGVycy5cclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgLy8gVGhlIGluZm9ybWFsIG5hbWUgb2YgdGhpcyBsb2cgKG11c3QgbWF0Y2ggdGhlIGtleSB0aGF0IHRoZSBMb2dEZWZpbml0aW9uIGlzIGEgdmFsdWUgZm9yKS5cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLy8gVGhlIHBsdWdpbiB0aGF0IGdlbmVyYXRlcyB0aGlzIGxvZy5cclxuICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyB8ICdPdmVybGF5UGx1Z2luJztcclxuICAvLyBQYXJzZWQgQUNUIGxvZyBsaW5lIHR5cGUuICBPdmVybGF5UGx1Z2luIGxpbmVzIHVzZSB0aGUgYHR5cGVgIGFzIGEgc3RyaW5nLlxyXG4gIG1lc3NhZ2VUeXBlOiBzdHJpbmc7XHJcbiAgLy8gSWYgdHJ1ZSwgYWx3YXlzIGluY2x1ZGUgdGhpcyBsaW5lIHdoZW4gc3BsaXR0aW5nIGxvZ3MgKGUuZy4gRkZYSVYgcGx1Z2luIHZlcnNpb24pLlxyXG4gIGdsb2JhbEluY2x1ZGU/OiBib29sZWFuO1xyXG4gIC8vIElmIHRydWUsIGFsd2F5cyBpbmNsdWRlIHRoZSBsYXN0IGluc3RhbmNlIG9mIHRoaXMgbGluZSB3aGVuIHNwbGl0dGluZyBsb2dzIChlLmcuIENoYW5nZVpvbmUpLlxyXG4gIGxhc3RJbmNsdWRlPzogYm9vbGVhbjtcclxuICAvLyBUcnVlIGlmIHRoZSBsaW5lIGNhbiBiZSBhbm9ueW1pemVkIChpLmUuIHJlbW92aW5nIHBsYXllciBpZHMgYW5kIG5hbWVzKS5cclxuICBjYW5Bbm9ueW1pemU/OiBib29sZWFuO1xyXG4gIC8vIElmIHRydWUsIHRoaXMgbG9nIGhhcyBub3QgYmVlbiBzZWVuIGJlZm9yZSBhbmQgbmVlZHMgbW9yZSBpbmZvcm1hdGlvbi5cclxuICBpc1Vua25vd24/OiBib29sZWFuO1xyXG4gIC8vIEZpZWxkcyBhdCB0aGlzIGluZGV4IGFuZCBiZXlvbmQgYXJlIGNsZWFyZWQsIHdoZW4gYW5vbnltaXppbmcuXHJcbiAgZmlyc3RVbmtub3duRmllbGQ/OiBudW1iZXI7XHJcbiAgLy8gQSBtYXAgb2YgYWxsIG9mIHRoZSBmaWVsZHMsIHVuaXF1ZSBmaWVsZCBuYW1lIHRvIGZpZWxkIGluZGV4LlxyXG4gIGZpZWxkcz86IHsgW2ZpZWxkTmFtZTogc3RyaW5nXTogbnVtYmVyIH07XHJcbiAgLy8gQSBsaXN0IG9mIGZpZWxkIGlkcyB0aGF0ICptYXkqIGNvbnRhaW4gUlNWIGtleXMgKGZvciBkZWNvZGluZylcclxuICBwb3NzaWJsZVJzdkZpZWxkcz86IHJlYWRvbmx5IG51bWJlcltdO1xyXG4gIHN1YkZpZWxkcz86IHtcclxuICAgIFtmaWVsZE5hbWU6IHN0cmluZ106IHtcclxuICAgICAgW2ZpZWxkVmFsdWU6IHN0cmluZ106IHtcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgY2FuQW5vbnltaXplOiBib29sZWFuO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG4gIC8vIE1hcCBvZiBpbmRleGVzIGZyb20gYSBwbGF5ZXIgaWQgdG8gdGhlIGluZGV4IG9mIHRoYXQgcGxheWVyIG5hbWUuXHJcbiAgcGxheWVySWRzPzogeyBbZmllbGRJZHg6IG51bWJlcl06IG51bWJlciB8IG51bGwgfTtcclxuICAvLyBBIGxpc3Qgb2YgZmllbGRzIHRoYXQgYXJlIG9rIHRvIGJlIGJsYW5rIChvciBoYXZlIGludmFsaWQgaWRzKS5cclxuICBibGFua0ZpZWxkcz86IHJlYWRvbmx5IG51bWJlcltdO1xyXG4gIC8vIFRoaXMgZmllbGQgYW5kIGFueSBmaWVsZCBhZnRlciB3aWxsIGJlIHRyZWF0ZWQgYXMgb3B0aW9uYWwgd2hlbiBjcmVhdGluZyBjYXB0dXJpbmcgcmVnZXhlcy5cclxuICBmaXJzdE9wdGlvbmFsRmllbGQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAvLyBUaGVzZSBmaWVsZHMgYXJlIHRyZWF0ZWQgYXMgcmVwZWF0YWJsZSBmaWVsZHNcclxuICByZXBlYXRpbmdGaWVsZHM/OiB7XHJcbiAgICBzdGFydGluZ0luZGV4OiBudW1iZXI7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgbmFtZXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xyXG4gICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgcHJpbWFyeUtleTogc3RyaW5nO1xyXG4gICAgcG9zc2libGVLZXlzOiByZWFkb25seSBzdHJpbmdbXTtcclxuICB9O1xyXG59O1xyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uTWFwID0geyBbbmFtZTogc3RyaW5nXTogTG9nRGVmaW5pdGlvbiB9O1xyXG50eXBlIExvZ0RlZmluaXRpb25WZXJzaW9uTWFwID0geyBbdmVyc2lvbjogc3RyaW5nXTogTG9nRGVmaW5pdGlvbk1hcCB9O1xyXG5cclxuLy8gVE9ETzogTWF5YmUgYnJpbmcgaW4gYSBoZWxwZXIgbGlicmFyeSB0aGF0IGNhbiBjb21waWxlLXRpbWUgZXh0cmFjdCB0aGVzZSBrZXlzIGluc3RlYWQ/XHJcbmNvbnN0IGNvbWJhdGFudE1lbW9yeUtleXM6IHJlYWRvbmx5IChFeHRyYWN0PGtleW9mIFBsdWdpbkNvbWJhdGFudFN0YXRlLCBzdHJpbmc+KVtdID0gW1xyXG4gICdDdXJyZW50V29ybGRJRCcsXHJcbiAgJ1dvcmxkSUQnLFxyXG4gICdXb3JsZE5hbWUnLFxyXG4gICdCTnBjSUQnLFxyXG4gICdCTnBjTmFtZUlEJyxcclxuICAnUGFydHlUeXBlJyxcclxuICAnSUQnLFxyXG4gICdPd25lcklEJyxcclxuICAnV2VhcG9uSWQnLFxyXG4gICdUeXBlJyxcclxuICAnSm9iJyxcclxuICAnTGV2ZWwnLFxyXG4gICdOYW1lJyxcclxuICAnQ3VycmVudEhQJyxcclxuICAnTWF4SFAnLFxyXG4gICdDdXJyZW50TVAnLFxyXG4gICdNYXhNUCcsXHJcbiAgJ1Bvc1gnLFxyXG4gICdQb3NZJyxcclxuICAnUG9zWicsXHJcbiAgJ0hlYWRpbmcnLFxyXG4gICdNb25zdGVyVHlwZScsXHJcbiAgJ1N0YXR1cycsXHJcbiAgJ01vZGVsU3RhdHVzJyxcclxuICAnQWdncmVzc2lvblN0YXR1cycsXHJcbiAgJ1RhcmdldElEJyxcclxuICAnSXNUYXJnZXRhYmxlJyxcclxuICAnUmFkaXVzJyxcclxuICAnRGlzdGFuY2UnLFxyXG4gICdFZmZlY3RpdmVEaXN0YW5jZScsXHJcbiAgJ05QQ1RhcmdldElEJyxcclxuICAnQ3VycmVudEdQJyxcclxuICAnTWF4R1AnLFxyXG4gICdDdXJyZW50Q1AnLFxyXG4gICdNYXhDUCcsXHJcbiAgJ1BDVGFyZ2V0SUQnLFxyXG4gICdJc0Nhc3RpbmcxJyxcclxuICAnSXNDYXN0aW5nMicsXHJcbiAgJ0Nhc3RCdWZmSUQnLFxyXG4gICdDYXN0VGFyZ2V0SUQnLFxyXG4gICdDYXN0RHVyYXRpb25DdXJyZW50JyxcclxuICAnQ2FzdER1cmF0aW9uTWF4JyxcclxuICAnVHJhbnNmb3JtYXRpb25JZCcsXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBsYXRlc3RMb2dEZWZpbml0aW9ucyA9IHtcclxuICBHYW1lTG9nOiB7XHJcbiAgICB0eXBlOiAnMDAnLFxyXG4gICAgbmFtZTogJ0dhbWVMb2cnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NoYXRMb2cnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgY29kZTogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgbGluZTogNCxcclxuICAgIH0sXHJcbiAgICBzdWJGaWVsZHM6IHtcclxuICAgICAgY29kZToge1xyXG4gICAgICAgICcwMDM5Jzoge1xyXG4gICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxyXG4gICAgICAgICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzAwMzgnOiB7XHJcbiAgICAgICAgICBuYW1lOiAnZWNobycsXHJcbiAgICAgICAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDA0NCc6IHtcclxuICAgICAgICAgIG5hbWU6ICdkaWFsb2cnLFxyXG4gICAgICAgICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzA4MzknOiB7XHJcbiAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIENoYW5nZVpvbmU6IHtcclxuICAgIHR5cGU6ICcwMScsXHJcbiAgICBuYW1lOiAnQ2hhbmdlWm9uZScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnVGVycml0b3J5JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgfSxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBDaGFuZ2VkUGxheWVyOiB7XHJcbiAgICB0eXBlOiAnMDInLFxyXG4gICAgbmFtZTogJ0NoYW5nZWRQbGF5ZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NoYW5nZVByaW1hcnlQbGF5ZXInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgbGFzdEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEFkZGVkQ29tYmF0YW50OiB7XHJcbiAgICB0eXBlOiAnMDMnLFxyXG4gICAgbmFtZTogJ0FkZGVkQ29tYmF0YW50JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdBZGRDb21iYXRhbnQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIGpvYjogNCxcclxuICAgICAgbGV2ZWw6IDUsXHJcbiAgICAgIG93bmVySWQ6IDYsXHJcbiAgICAgIHdvcmxkSWQ6IDcsXHJcbiAgICAgIHdvcmxkOiA4LFxyXG4gICAgICBucGNOYW1lSWQ6IDksXHJcbiAgICAgIG5wY0Jhc2VJZDogMTAsXHJcbiAgICAgIGN1cnJlbnRIcDogMTEsXHJcbiAgICAgIGhwOiAxMixcclxuICAgICAgY3VycmVudE1wOiAxMyxcclxuICAgICAgbXA6IDE0LFxyXG4gICAgICAvLyBtYXhUcDogMTUsXHJcbiAgICAgIC8vIHRwOiAxNixcclxuICAgICAgeDogMTcsXHJcbiAgICAgIHk6IDE4LFxyXG4gICAgICB6OiAxOSxcclxuICAgICAgaGVhZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBSZW1vdmVkQ29tYmF0YW50OiB7XHJcbiAgICB0eXBlOiAnMDQnLFxyXG4gICAgbmFtZTogJ1JlbW92ZWRDb21iYXRhbnQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1JlbW92ZUNvbWJhdGFudCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgam9iOiA0LFxyXG4gICAgICBsZXZlbDogNSxcclxuICAgICAgb3duZXI6IDYsXHJcbiAgICAgIHdvcmxkOiA4LFxyXG4gICAgICBucGNOYW1lSWQ6IDksXHJcbiAgICAgIG5wY0Jhc2VJZDogMTAsXHJcbiAgICAgIGhwOiAxMixcclxuICAgICAgeDogMTcsXHJcbiAgICAgIHk6IDE4LFxyXG4gICAgICB6OiAxOSxcclxuICAgICAgaGVhZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBQYXJ0eUxpc3Q6IHtcclxuICAgIHR5cGU6ICcxMScsXHJcbiAgICBuYW1lOiAnUGFydHlMaXN0JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdQYXJ0eUxpc3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgcGFydHlDb3VudDogMixcclxuICAgICAgaWQwOiAzLFxyXG4gICAgICBpZDE6IDQsXHJcbiAgICAgIGlkMjogNSxcclxuICAgICAgaWQzOiA2LFxyXG4gICAgICBpZDQ6IDcsXHJcbiAgICAgIGlkNTogOCxcclxuICAgICAgaWQ2OiA5LFxyXG4gICAgICBpZDc6IDEwLFxyXG4gICAgICBpZDg6IDExLFxyXG4gICAgICBpZDk6IDEyLFxyXG4gICAgICBpZDEwOiAxMyxcclxuICAgICAgaWQxMTogMTQsXHJcbiAgICAgIGlkMTI6IDE1LFxyXG4gICAgICBpZDEzOiAxNixcclxuICAgICAgaWQxNDogMTcsXHJcbiAgICAgIGlkMTU6IDE4LFxyXG4gICAgICBpZDE2OiAxOSxcclxuICAgICAgaWQxNzogMjAsXHJcbiAgICAgIGlkMTg6IDIxLFxyXG4gICAgICBpZDE5OiAyMixcclxuICAgICAgaWQyMDogMjMsXHJcbiAgICAgIGlkMjE6IDI0LFxyXG4gICAgICBpZDIyOiAyNSxcclxuICAgICAgaWQyMzogMjYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDM6IG51bGwsXHJcbiAgICAgIDQ6IG51bGwsXHJcbiAgICAgIDU6IG51bGwsXHJcbiAgICAgIDY6IG51bGwsXHJcbiAgICAgIDc6IG51bGwsXHJcbiAgICAgIDg6IG51bGwsXHJcbiAgICAgIDk6IG51bGwsXHJcbiAgICAgIDEwOiBudWxsLFxyXG4gICAgICAxMTogbnVsbCxcclxuICAgICAgMTI6IG51bGwsXHJcbiAgICAgIDEzOiBudWxsLFxyXG4gICAgICAxNDogbnVsbCxcclxuICAgICAgMTU6IG51bGwsXHJcbiAgICAgIDE2OiBudWxsLFxyXG4gICAgICAxNzogbnVsbCxcclxuICAgICAgMTg6IG51bGwsXHJcbiAgICAgIDE5OiBudWxsLFxyXG4gICAgICAyMDogbnVsbCxcclxuICAgICAgMjE6IG51bGwsXHJcbiAgICAgIDIyOiBudWxsLFxyXG4gICAgICAyMzogbnVsbCxcclxuICAgICAgMjQ6IG51bGwsXHJcbiAgICAgIDI1OiBudWxsLFxyXG4gICAgICAyNjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDMsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICB9LFxyXG4gIFBsYXllclN0YXRzOiB7XHJcbiAgICB0eXBlOiAnMTInLFxyXG4gICAgbmFtZTogJ1BsYXllclN0YXRzJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdQbGF5ZXJTdGF0cycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBqb2I6IDIsXHJcbiAgICAgIHN0cmVuZ3RoOiAzLFxyXG4gICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgIHZpdGFsaXR5OiA1LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IDYsXHJcbiAgICAgIG1pbmQ6IDcsXHJcbiAgICAgIHBpZXR5OiA4LFxyXG4gICAgICBhdHRhY2tQb3dlcjogOSxcclxuICAgICAgZGlyZWN0SGl0OiAxMCxcclxuICAgICAgY3JpdGljYWxIaXQ6IDExLFxyXG4gICAgICBhdHRhY2tNYWdpY1BvdGVuY3k6IDEyLFxyXG4gICAgICBoZWFsTWFnaWNQb3RlbmN5OiAxMyxcclxuICAgICAgZGV0ZXJtaW5hdGlvbjogMTQsXHJcbiAgICAgIHNraWxsU3BlZWQ6IDE1LFxyXG4gICAgICBzcGVsbFNwZWVkOiAxNixcclxuICAgICAgdGVuYWNpdHk6IDE4LFxyXG4gICAgICBsb2NhbENvbnRlbnRJZDogMTksXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgbGFzdEluY2x1ZGU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFN0YXJ0c1VzaW5nOiB7XHJcbiAgICB0eXBlOiAnMjAnLFxyXG4gICAgbmFtZTogJ1N0YXJ0c1VzaW5nJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTdGFydHNDYXN0aW5nJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBhYmlsaXR5OiA1LFxyXG4gICAgICB0YXJnZXRJZDogNixcclxuICAgICAgdGFyZ2V0OiA3LFxyXG4gICAgICBjYXN0VGltZTogOCxcclxuICAgICAgeDogOSxcclxuICAgICAgeTogMTAsXHJcbiAgICAgIHo6IDExLFxyXG4gICAgICBoZWFkaW5nOiAxMixcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogWzVdLFxyXG4gICAgYmxhbmtGaWVsZHM6IFs2XSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiA3LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQWJpbGl0eToge1xyXG4gICAgdHlwZTogJzIxJyxcclxuICAgIG5hbWU6ICdBYmlsaXR5JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdBY3Rpb25FZmZlY3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIGFiaWxpdHk6IDUsXHJcbiAgICAgIHRhcmdldElkOiA2LFxyXG4gICAgICB0YXJnZXQ6IDcsXHJcbiAgICAgIGZsYWdzOiA4LFxyXG4gICAgICBkYW1hZ2U6IDksXHJcbiAgICAgIHRhcmdldEN1cnJlbnRIcDogMjQsXHJcbiAgICAgIHRhcmdldE1heEhwOiAyNSxcclxuICAgICAgdGFyZ2V0Q3VycmVudE1wOiAyNixcclxuICAgICAgdGFyZ2V0TWF4TXA6IDI3LFxyXG4gICAgICAvLyB0YXJnZXRDdXJyZW50VHA6IDI4LFxyXG4gICAgICAvLyB0YXJnZXRNYXhUcDogMjksXHJcbiAgICAgIHRhcmdldFg6IDMwLFxyXG4gICAgICB0YXJnZXRZOiAzMSxcclxuICAgICAgdGFyZ2V0WjogMzIsXHJcbiAgICAgIHRhcmdldEhlYWRpbmc6IDMzLFxyXG4gICAgICBjdXJyZW50SHA6IDM0LFxyXG4gICAgICBtYXhIcDogMzUsXHJcbiAgICAgIGN1cnJlbnRNcDogMzYsXHJcbiAgICAgIG1heE1wOiAzNyxcclxuICAgICAgLy8gY3VycmVudFRwOiAzODtcclxuICAgICAgLy8gbWF4VHA6IDM5O1xyXG4gICAgICB4OiA0MCxcclxuICAgICAgeTogNDEsXHJcbiAgICAgIHo6IDQyLFxyXG4gICAgICBoZWFkaW5nOiA0MyxcclxuICAgICAgc2VxdWVuY2U6IDQ0LFxyXG4gICAgICB0YXJnZXRJbmRleDogNDUsXHJcbiAgICAgIHRhcmdldENvdW50OiA0NixcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogWzVdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IDcsXHJcbiAgICB9LFxyXG4gICAgYmxhbmtGaWVsZHM6IFs2XSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmV0d29ya0FPRUFiaWxpdHk6IHtcclxuICAgIHR5cGU6ICcyMicsXHJcbiAgICBuYW1lOiAnTmV0d29ya0FPRUFiaWxpdHknLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0FPRUFjdGlvbkVmZmVjdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgYWJpbGl0eTogNSxcclxuICAgICAgdGFyZ2V0SWQ6IDYsXHJcbiAgICAgIHRhcmdldDogNyxcclxuICAgICAgZmxhZ3M6IDgsXHJcbiAgICAgIGRhbWFnZTogOSxcclxuICAgICAgdGFyZ2V0Q3VycmVudEhwOiAyNCxcclxuICAgICAgdGFyZ2V0TWF4SHA6IDI1LFxyXG4gICAgICB0YXJnZXRDdXJyZW50TXA6IDI2LFxyXG4gICAgICB0YXJnZXRNYXhNcDogMjcsXHJcbiAgICAgIC8vIHRhcmdldEN1cnJlbnRUcDogMjgsXHJcbiAgICAgIC8vIHRhcmdldE1heFRwOiAyOSxcclxuICAgICAgdGFyZ2V0WDogMzAsXHJcbiAgICAgIHRhcmdldFk6IDMxLFxyXG4gICAgICB0YXJnZXRaOiAzMixcclxuICAgICAgdGFyZ2V0SGVhZGluZzogMzMsXHJcbiAgICAgIGN1cnJlbnRIcDogMzQsXHJcbiAgICAgIG1heEhwOiAzNSxcclxuICAgICAgY3VycmVudE1wOiAzNixcclxuICAgICAgbWF4TXA6IDM3LFxyXG4gICAgICAvLyBjdXJyZW50VHA6IDM4O1xyXG4gICAgICAvLyBtYXhUcDogMzk7XHJcbiAgICAgIHg6IDQwLFxyXG4gICAgICB5OiA0MSxcclxuICAgICAgejogNDIsXHJcbiAgICAgIGhlYWRpbmc6IDQzLFxyXG4gICAgICBzZXF1ZW5jZTogNDQsXHJcbiAgICAgIHRhcmdldEluZGV4OiA0NSxcclxuICAgICAgdGFyZ2V0Q291bnQ6IDQ2LFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiBbNV0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNjogNyxcclxuICAgIH0sXHJcbiAgICBibGFua0ZpZWxkczogWzZdLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrQ2FuY2VsQWJpbGl0eToge1xyXG4gICAgdHlwZTogJzIzJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrQ2FuY2VsQWJpbGl0eScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQ2FuY2VsQWN0aW9uJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiA1LFxyXG4gICAgICByZWFzb246IDYsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IFs1XSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmV0d29ya0RvVDoge1xyXG4gICAgdHlwZTogJzI0JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrRG9UJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEb1RIb1QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIHdoaWNoOiA0LFxyXG4gICAgICBlZmZlY3RJZDogNSxcclxuICAgICAgZGFtYWdlOiA2LFxyXG4gICAgICBjdXJyZW50SHA6IDcsXHJcbiAgICAgIG1heEhwOiA4LFxyXG4gICAgICBjdXJyZW50TXA6IDksXHJcbiAgICAgIG1heE1wOiAxMCxcclxuICAgICAgLy8gY3VycmVudFRwOiAxMSxcclxuICAgICAgLy8gbWF4VHA6IDEyLFxyXG4gICAgICB4OiAxMyxcclxuICAgICAgeTogMTQsXHJcbiAgICAgIHo6IDE1LFxyXG4gICAgICBoZWFkaW5nOiAxNixcclxuICAgICAgc291cmNlSWQ6IDE3LFxyXG4gICAgICBzb3VyY2U6IDE4LFxyXG4gICAgICAvLyBBbiBpZCBudW1iZXIgbG9va3VwIGludG8gdGhlIEF0dGFja1R5cGUgdGFibGVcclxuICAgICAgZGFtYWdlVHlwZTogMTksXHJcbiAgICAgIHNvdXJjZUN1cnJlbnRIcDogMjAsXHJcbiAgICAgIHNvdXJjZU1heEhwOiAyMSxcclxuICAgICAgc291cmNlQ3VycmVudE1wOiAyMixcclxuICAgICAgc291cmNlTWF4TXA6IDIzLFxyXG4gICAgICAvLyBzb3VyY2VDdXJyZW50VHA6IDI0LFxyXG4gICAgICAvLyBzb3VyY2VNYXhUcDogMjUsXHJcbiAgICAgIHNvdXJjZVg6IDI2LFxyXG4gICAgICBzb3VyY2VZOiAyNyxcclxuICAgICAgc291cmNlWjogMjgsXHJcbiAgICAgIHNvdXJjZUhlYWRpbmc6IDI5LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICAxNzogMTgsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBXYXNEZWZlYXRlZDoge1xyXG4gICAgdHlwZTogJzI1JyxcclxuICAgIG5hbWU6ICdXYXNEZWZlYXRlZCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRGVhdGgnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdGFyZ2V0SWQ6IDIsXHJcbiAgICAgIHRhcmdldDogMyxcclxuICAgICAgc291cmNlSWQ6IDQsXHJcbiAgICAgIHNvdXJjZTogNSxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNDogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEdhaW5zRWZmZWN0OiB7XHJcbiAgICB0eXBlOiAnMjYnLFxyXG4gICAgbmFtZTogJ0dhaW5zRWZmZWN0JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTdGF0dXNBZGQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgZWZmZWN0SWQ6IDIsXHJcbiAgICAgIGVmZmVjdDogMyxcclxuICAgICAgZHVyYXRpb246IDQsXHJcbiAgICAgIHNvdXJjZUlkOiA1LFxyXG4gICAgICBzb3VyY2U6IDYsXHJcbiAgICAgIHRhcmdldElkOiA3LFxyXG4gICAgICB0YXJnZXQ6IDgsXHJcbiAgICAgIGNvdW50OiA5LFxyXG4gICAgICB0YXJnZXRNYXhIcDogMTAsXHJcbiAgICAgIHNvdXJjZU1heEhwOiAxMSxcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogWzNdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDU6IDYsXHJcbiAgICAgIDc6IDgsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBIZWFkTWFya2VyOiB7XHJcbiAgICB0eXBlOiAnMjcnLFxyXG4gICAgbmFtZTogJ0hlYWRNYXJrZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1RhcmdldEljb24nLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdGFyZ2V0SWQ6IDIsXHJcbiAgICAgIHRhcmdldDogMyxcclxuICAgICAgaWQ6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrUmFpZE1hcmtlcjoge1xyXG4gICAgdHlwZTogJzI4JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrUmFpZE1hcmtlcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnV2F5bWFya01hcmtlcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBvcGVyYXRpb246IDIsXHJcbiAgICAgIHdheW1hcms6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiA1LFxyXG4gICAgICB4OiA2LFxyXG4gICAgICB5OiA3LFxyXG4gICAgICB6OiA4LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmV0d29ya1RhcmdldE1hcmtlcjoge1xyXG4gICAgdHlwZTogJzI5JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrVGFyZ2V0TWFya2VyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTaWduTWFya2VyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIG9wZXJhdGlvbjogMiwgLy8gQWRkLCBVcGRhdGUsIERlbGV0ZVxyXG4gICAgICB3YXltYXJrOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogNSxcclxuICAgICAgdGFyZ2V0SWQ6IDYsXHJcbiAgICAgIHRhcmdldE5hbWU6IDcsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDQ6IG51bGwsXHJcbiAgICAgIDU6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBMb3Nlc0VmZmVjdDoge1xyXG4gICAgdHlwZTogJzMwJyxcclxuICAgIG5hbWU6ICdMb3Nlc0VmZmVjdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhdHVzUmVtb3ZlJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGVmZmVjdElkOiAyLFxyXG4gICAgICBlZmZlY3Q6IDMsXHJcbiAgICAgIHNvdXJjZUlkOiA1LFxyXG4gICAgICBzb3VyY2U6IDYsXHJcbiAgICAgIHRhcmdldElkOiA3LFxyXG4gICAgICB0YXJnZXQ6IDgsXHJcbiAgICAgIGNvdW50OiA5LFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiBbM10sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgNTogNixcclxuICAgICAgNzogOCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtHYXVnZToge1xyXG4gICAgdHlwZTogJzMxJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrR2F1Z2UnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0dhdWdlJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBkYXRhMDogMyxcclxuICAgICAgZGF0YTE6IDQsXHJcbiAgICAgIGRhdGEyOiA1LFxyXG4gICAgICBkYXRhMzogNixcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICAvLyBTb21ldGltZXMgdGhpcyBsYXN0IGZpZWxkIGxvb2tzIGxpa2UgYSBwbGF5ZXIgaWQuXHJcbiAgICAvLyBGb3Igc2FmZXR5LCBhbm9ueW1pemUgYWxsIG9mIHRoZSBnYXVnZSBkYXRhLlxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDMsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtXb3JsZDoge1xyXG4gICAgdHlwZTogJzMyJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrV29ybGQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1dvcmxkJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgaXNVbmtub3duOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBBY3RvckNvbnRyb2w6IHtcclxuICAgIHR5cGU6ICczMycsXHJcbiAgICBuYW1lOiAnQWN0b3JDb250cm9sJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEaXJlY3RvcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbnN0YW5jZTogMixcclxuICAgICAgY29tbWFuZDogMyxcclxuICAgICAgZGF0YTA6IDQsXHJcbiAgICAgIGRhdGExOiA1LFxyXG4gICAgICBkYXRhMjogNixcclxuICAgICAgZGF0YTM6IDcsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOYW1lVG9nZ2xlOiB7XHJcbiAgICB0eXBlOiAnMzQnLFxyXG4gICAgbmFtZTogJ05hbWVUb2dnbGUnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ05hbWVUb2dnbGUnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIHRhcmdldElkOiA0LFxyXG4gICAgICB0YXJnZXROYW1lOiA1LFxyXG4gICAgICB0b2dnbGU6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBUZXRoZXI6IHtcclxuICAgIHR5cGU6ICczNScsXHJcbiAgICBuYW1lOiAnVGV0aGVyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdUZXRoZXInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgdGFyZ2V0SWQ6IDQsXHJcbiAgICAgIHRhcmdldDogNSxcclxuICAgICAgaWQ6IDgsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDksXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIExpbWl0QnJlYWs6IHtcclxuICAgIHR5cGU6ICczNicsXHJcbiAgICBuYW1lOiAnTGltaXRCcmVhaycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnTGltaXRCcmVhaycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB2YWx1ZUhleDogMixcclxuICAgICAgYmFyczogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtFZmZlY3RSZXN1bHQ6IHtcclxuICAgIHR5cGU6ICczNycsXHJcbiAgICBuYW1lOiAnTmV0d29ya0VmZmVjdFJlc3VsdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRWZmZWN0UmVzdWx0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBzZXF1ZW5jZUlkOiA0LFxyXG4gICAgICBjdXJyZW50SHA6IDUsXHJcbiAgICAgIG1heEhwOiA2LFxyXG4gICAgICBjdXJyZW50TXA6IDcsXHJcbiAgICAgIG1heE1wOiA4LFxyXG4gICAgICBjdXJyZW50U2hpZWxkOiA5LFxyXG4gICAgICAvLyBGaWVsZCBpbmRleCAxMCBpcyBhbHdheXMgYDBgXHJcbiAgICAgIHg6IDExLFxyXG4gICAgICB5OiAxMixcclxuICAgICAgejogMTMsXHJcbiAgICAgIGhlYWRpbmc6IDE0LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiAyMixcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgU3RhdHVzRWZmZWN0OiB7XHJcbiAgICB0eXBlOiAnMzgnLFxyXG4gICAgbmFtZTogJ1N0YXR1c0VmZmVjdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhdHVzTGlzdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB0YXJnZXRJZDogMixcclxuICAgICAgdGFyZ2V0OiAzLFxyXG4gICAgICBqb2JMZXZlbERhdGE6IDQsXHJcbiAgICAgIGhwOiA1LFxyXG4gICAgICBtYXhIcDogNixcclxuICAgICAgbXA6IDcsXHJcbiAgICAgIG1heE1wOiA4LFxyXG4gICAgICBjdXJyZW50U2hpZWxkOiA5LFxyXG4gICAgICAvLyBGaWVsZCBpbmRleCAxMCBpcyBhbHdheXMgYDBgXHJcbiAgICAgIHg6IDExLFxyXG4gICAgICB5OiAxMixcclxuICAgICAgejogMTMsXHJcbiAgICAgIGhlYWRpbmc6IDE0LFxyXG4gICAgICBkYXRhMDogMTUsXHJcbiAgICAgIGRhdGExOiAxNixcclxuICAgICAgZGF0YTI6IDE3LFxyXG4gICAgICBkYXRhMzogMTgsXHJcbiAgICAgIGRhdGE0OiAxOSxcclxuICAgICAgZGF0YTU6IDIwLFxyXG4gICAgICAvLyBWYXJpYWJsZSBudW1iZXIgb2YgdHJpcGxldHMgaGVyZSwgYnV0IGF0IGxlYXN0IG9uZS5cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogMTgsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDE4LFxyXG4gIH0sXHJcbiAgTmV0d29ya1VwZGF0ZUhQOiB7XHJcbiAgICB0eXBlOiAnMzknLFxyXG4gICAgbmFtZTogJ05ldHdvcmtVcGRhdGVIUCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnVXBkYXRlSHAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIGN1cnJlbnRIcDogNCxcclxuICAgICAgbWF4SHA6IDUsXHJcbiAgICAgIGN1cnJlbnRNcDogNixcclxuICAgICAgbWF4TXA6IDcsXHJcbiAgICAgIC8vIGN1cnJlbnRUcDogOCxcclxuICAgICAgLy8gbWF4VHA6IDksXHJcbiAgICAgIHg6IDEwLFxyXG4gICAgICB5OiAxMSxcclxuICAgICAgejogMTIsXHJcbiAgICAgIGhlYWRpbmc6IDEzLFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTWFwOiB7XHJcbiAgICB0eXBlOiAnNDAnLFxyXG4gICAgbmFtZTogJ01hcCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQ2hhbmdlTWFwJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICByZWdpb25OYW1lOiAzLFxyXG4gICAgICBwbGFjZU5hbWU6IDQsXHJcbiAgICAgIHBsYWNlTmFtZVN1YjogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gIH0sXHJcbiAgU3lzdGVtTG9nTWVzc2FnZToge1xyXG4gICAgdHlwZTogJzQxJyxcclxuICAgIG5hbWU6ICdTeXN0ZW1Mb2dNZXNzYWdlJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTeXN0ZW1Mb2dNZXNzYWdlJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGluc3RhbmNlOiAyLFxyXG4gICAgICBpZDogMyxcclxuICAgICAgcGFyYW0wOiA0LFxyXG4gICAgICBwYXJhbTE6IDUsXHJcbiAgICAgIHBhcmFtMjogNixcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFN0YXR1c0xpc3QzOiB7XHJcbiAgICB0eXBlOiAnNDInLFxyXG4gICAgbmFtZTogJ1N0YXR1c0xpc3QzJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTdGF0dXNMaXN0MycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgLy8gdHJpcGxldHMgb2YgZmllbGRzIGZyb20gaGVyZSAoZWZmZWN0SWQsIGRhdGEsIHBsYXllcklkKT9cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDQsXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogNCxcclxuICB9LFxyXG4gIFBhcnNlckluZm86IHtcclxuICAgIHR5cGU6ICcyNDknLFxyXG4gICAgbmFtZTogJ1BhcnNlckluZm8nLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1NldHRpbmdzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgUHJvY2Vzc0luZm86IHtcclxuICAgIHR5cGU6ICcyNTAnLFxyXG4gICAgbmFtZTogJ1Byb2Nlc3NJbmZvJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdQcm9jZXNzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgRGVidWc6IHtcclxuICAgIHR5cGU6ICcyNTEnLFxyXG4gICAgbmFtZTogJ0RlYnVnJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEZWJ1ZycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IGZhbHNlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBQYWNrZXREdW1wOiB7XHJcbiAgICB0eXBlOiAnMjUyJyxcclxuICAgIG5hbWU6ICdQYWNrZXREdW1wJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdQYWNrZXREdW1wJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiBmYWxzZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgVmVyc2lvbjoge1xyXG4gICAgdHlwZTogJzI1MycsXHJcbiAgICBuYW1lOiAnVmVyc2lvbicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnVmVyc2lvbicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEVycm9yOiB7XHJcbiAgICB0eXBlOiAnMjU0JyxcclxuICAgIG5hbWU6ICdFcnJvcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRXJyb3InLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IGZhbHNlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOb25lOiB7XHJcbiAgICB0eXBlOiAnWzAtOV0rJyxcclxuICAgIG5hbWU6ICdOb25lJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdOb25lJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgaXNVbmtub3duOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICAvLyBPdmVybGF5UGx1Z2luIGxvZyBsaW5lc1xyXG4gIExpbmVSZWdpc3RyYXRpb246IHtcclxuICAgIHR5cGU6ICcyNTYnLFxyXG4gICAgbmFtZTogJ0xpbmVSZWdpc3RyYXRpb24nLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI1NicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICB2ZXJzaW9uOiA0LFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE1hcEVmZmVjdDoge1xyXG4gICAgdHlwZTogJzI1NycsXHJcbiAgICBuYW1lOiAnTWFwRWZmZWN0JyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTcnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5zdGFuY2U6IDIsXHJcbiAgICAgIGZsYWdzOiAzLFxyXG4gICAgICAvLyB2YWx1ZXMgZm9yIHRoZSBsb2NhdGlvbiBmaWVsZCBzZWVtIHRvIHZhcnkgYmV0d2VlbiBpbnN0YW5jZXNcclxuICAgICAgLy8gKGUuZy4gYSBsb2NhdGlvbiBvZiAnMDgnIGluIFA1UyBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgdGhlIHNhbWUgbG9jYXRpb24gaW4gUDVTIGFzIGluIFA2UylcclxuICAgICAgLy8gYnV0IHRoaXMgZmllbGQgZG9lcyBhcHBlYXIgdG8gY29uc2lzdGVudGx5IGNvbnRhaW4gcG9zaXRpb24gaW5mbyBmb3IgdGhlIGVmZmVjdCByZW5kZXJpbmdcclxuICAgICAgbG9jYXRpb246IDQsXHJcbiAgICAgIGRhdGEwOiA1LFxyXG4gICAgICBkYXRhMTogNixcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEZhdGVEaXJlY3Rvcjoge1xyXG4gICAgdHlwZTogJzI1OCcsXHJcbiAgICBuYW1lOiAnRmF0ZURpcmVjdG9yJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTgnLFxyXG4gICAgLy8gZmF0ZUlkIGFuZCBwcm9ncmVzcyBhcmUgaW4gaGV4LlxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgY2F0ZWdvcnk6IDIsXHJcbiAgICAgIC8vIHBhZGRpbmcwOiAzLFxyXG4gICAgICBmYXRlSWQ6IDQsXHJcbiAgICAgIHByb2dyZXNzOiA1LFxyXG4gICAgICAvLyBwYXJhbTM6IDYsXHJcbiAgICAgIC8vIHBhcmFtNDogNyxcclxuICAgICAgLy8gcGFyYW01OiA4LFxyXG4gICAgICAvLyBwYXJhbTY6IDksXHJcbiAgICAgIC8vIHBhZGRpbmcxOiAxMCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIENFRGlyZWN0b3I6IHtcclxuICAgIHR5cGU6ICcyNTknLFxyXG4gICAgbmFtZTogJ0NFRGlyZWN0b3InLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI1OScsXHJcbiAgICAvLyBhbGwgZmllbGRzIGFyZSBpbiBoZXhcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHBvcFRpbWU6IDIsXHJcbiAgICAgIHRpbWVSZW1haW5pbmc6IDMsXHJcbiAgICAgIC8vIHVua25vd24wOiA0LFxyXG4gICAgICBjZUtleTogNSxcclxuICAgICAgbnVtUGxheWVyczogNixcclxuICAgICAgc3RhdHVzOiA3LFxyXG4gICAgICAvLyB1bmtub3duMTogOCxcclxuICAgICAgcHJvZ3Jlc3M6IDksXHJcbiAgICAgIC8vIHVua25vd24yOiAxMCxcclxuICAgICAgLy8gdW5rbm93bjM6IDExLFxyXG4gICAgICAvLyB1bmtub3duNDogMTIsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBJbkNvbWJhdDoge1xyXG4gICAgdHlwZTogJzI2MCcsXHJcbiAgICBuYW1lOiAnSW5Db21iYXQnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2MCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbkFDVENvbWJhdDogMixcclxuICAgICAgaW5HYW1lQ29tYmF0OiAzLFxyXG4gICAgICBpc0FDVENoYW5nZWQ6IDQsXHJcbiAgICAgIGlzR2FtZUNoYW5nZWQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBDb21iYXRhbnRNZW1vcnk6IHtcclxuICAgIHR5cGU6ICcyNjEnLFxyXG4gICAgbmFtZTogJ0NvbWJhdGFudE1lbW9yeScsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjYxJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGNoYW5nZTogMixcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIC8vIGZyb20gaGVyZSwgcGFpcnMgb2YgZmllbGQgbmFtZS92YWx1ZXNcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDUsXHJcbiAgICAvLyBUT0RPOiBmaXggdGhpcyBkYXRhIHN0cnVjdHVyZSBhbmQgYW5vbnltaXplciB0byBiZSBhYmxlIHRvIGhhbmRsZSByZXBlYXRpbmdGaWVsZHMuXHJcbiAgICAvLyBBdCB0aGUgdmVyeSBsZWFzdCwgTmFtZSBhbmQgUENUYXJnZXRJRCBuZWVkIHRvIGJlIGFub255bWl6ZWQgYXMgd2VsbC5cclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiA0LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDM6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgcmVwZWF0aW5nRmllbGRzOiB7XHJcbiAgICAgIHN0YXJ0aW5nSW5kZXg6IDQsXHJcbiAgICAgIGxhYmVsOiAncGFpcicsXHJcbiAgICAgIG5hbWVzOiBbJ2tleScsICd2YWx1ZSddLFxyXG4gICAgICBzb3J0S2V5czogdHJ1ZSxcclxuICAgICAgcHJpbWFyeUtleTogJ2tleScsXHJcbiAgICAgIHBvc3NpYmxlS2V5czogY29tYmF0YW50TWVtb3J5S2V5cyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBSU1ZEYXRhOiB7XHJcbiAgICB0eXBlOiAnMjYyJyxcclxuICAgIG5hbWU6ICdSU1ZEYXRhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgbG9jYWxlOiAyLFxyXG4gICAgICAvLyB1bmtub3duMDogMyxcclxuICAgICAga2V5OiA0LFxyXG4gICAgICB2YWx1ZTogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFN0YXJ0c1VzaW5nRXh0cmE6IHtcclxuICAgIHR5cGU6ICcyNjMnLFxyXG4gICAgbmFtZTogJ1N0YXJ0c1VzaW5nRXh0cmEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2MycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHg6IDQsXHJcbiAgICAgIHk6IDUsXHJcbiAgICAgIHo6IDYsXHJcbiAgICAgIGhlYWRpbmc6IDcsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiA3LFxyXG4gIH0sXHJcbiAgQWJpbGl0eUV4dHJhOiB7XHJcbiAgICB0eXBlOiAnMjY0JyxcclxuICAgIG5hbWU6ICdBYmlsaXR5RXh0cmEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2NCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGdsb2JhbEVmZmVjdENvdW50ZXI6IDQsXHJcbiAgICAgIGRhdGFGbGFnOiA1LFxyXG4gICAgICB4OiA2LFxyXG4gICAgICB5OiA3LFxyXG4gICAgICB6OiA4LFxyXG4gICAgICBoZWFkaW5nOiA5LFxyXG4gICAgfSxcclxuICAgIGJsYW5rRmllbGRzOiBbNl0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDksXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dEZWZpbml0aW9uc1ZlcnNpb25zID0ge1xyXG4gICdsYXRlc3QnOiBsYXRlc3RMb2dEZWZpbml0aW9ucyxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIFZlcmlmeSB0aGF0IHRoaXMgaGFzIHRoZSByaWdodCB0eXBlLCBidXQgZXhwb3J0IGBhcyBjb25zdGAuXHJcbmNvbnN0IGFzc2VydExvZ0RlZmluaXRpb25zOiBMb2dEZWZpbml0aW9uVmVyc2lvbk1hcCA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnM7XHJcbmNvbnNvbGUuYXNzZXJ0KGFzc2VydExvZ0RlZmluaXRpb25zKTtcclxuXHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25zID0gdHlwZW9mIGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbJ2xhdGVzdCddO1xyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uVHlwZXMgPSBrZXlvZiBMb2dEZWZpbml0aW9ucztcclxuZXhwb3J0IHR5cGUgTG9nRGVmaW5pdGlvblZlcnNpb25zID0ga2V5b2YgdHlwZW9mIGxvZ0RlZmluaXRpb25zVmVyc2lvbnM7XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc05hcnJvd2luZ1R5cGUgPSB7IHJlYWRvbmx5IHJlcGVhdGluZ0ZpZWxkczogdW5rbm93biB9O1xyXG5cclxuZXhwb3J0IHR5cGUgUmVwZWF0aW5nRmllbGRzVHlwZXMgPSBrZXlvZiB7XHJcbiAgW1xyXG4gICAgdHlwZSBpbiBMb2dEZWZpbml0aW9uVHlwZXMgYXMgTG9nRGVmaW5pdGlvbnNbdHlwZV0gZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNOYXJyb3dpbmdUeXBlID8gdHlwZVxyXG4gICAgICA6IG5ldmVyXHJcbiAgXTogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zID0ge1xyXG4gIFt0eXBlIGluIFJlcGVhdGluZ0ZpZWxkc1R5cGVzXTogTG9nRGVmaW5pdGlvbnNbdHlwZV0gJiB7XHJcbiAgICByZWFkb25seSByZXBlYXRpbmdGaWVsZHM6IEV4Y2x1ZGU8TG9nRGVmaW5pdGlvbnNbdHlwZV1bJ3JlcGVhdGluZ0ZpZWxkcyddLCB1bmRlZmluZWQ+O1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBQYXJzZUhlbHBlckZpZWxkPFxyXG4gIFR5cGUgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRmllbGRzIGV4dGVuZHMgTmV0RmllbGRzUmV2ZXJzZVtUeXBlXSxcclxuICBGaWVsZCBleHRlbmRzIGtleW9mIEZpZWxkcyxcclxuPiA9IHtcclxuICBmaWVsZDogRmllbGRzW0ZpZWxkXSBleHRlbmRzIHN0cmluZyA/IEZpZWxkc1tGaWVsZF0gOiBuZXZlcjtcclxuICB2YWx1ZT86IHN0cmluZztcclxuICBvcHRpb25hbD86IGJvb2xlYW47XHJcbiAgcmVwZWF0aW5nPzogYm9vbGVhbjtcclxuICByZXBlYXRpbmdLZXlzPzogc3RyaW5nW107XHJcbiAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gIHByaW1hcnlLZXk/OiBzdHJpbmc7XHJcbiAgcG9zc2libGVLZXlzPzogc3RyaW5nW107XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBQYXJzZUhlbHBlckZpZWxkczxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzPiA9IHtcclxuICBbZmllbGQgaW4ga2V5b2YgTmV0RmllbGRzUmV2ZXJzZVtUXV06IFBhcnNlSGVscGVyRmllbGQ8VCwgTmV0RmllbGRzUmV2ZXJzZVtUXSwgZmllbGQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nRGVmaW5pdGlvbnNWZXJzaW9uc1snbGF0ZXN0J107XHJcbiIsIi8vIEhlbHBlciBFcnJvciBmb3IgVHlwZVNjcmlwdCBzaXR1YXRpb25zIHdoZXJlIHRoZSBwcm9ncmFtbWVyIHRoaW5rcyB0aGV5XHJcbi8vIGtub3cgYmV0dGVyIHRoYW4gVHlwZVNjcmlwdCB0aGF0IHNvbWUgc2l0dWF0aW9uIHdpbGwgbmV2ZXIgb2NjdXIuXHJcblxyXG4vLyBUaGUgaW50ZW50aW9uIGhlcmUgaXMgdGhhdCB0aGUgcHJvZ3JhbW1lciBkb2VzIG5vdCBleHBlY3QgYSBwYXJ0aWN1bGFyXHJcbi8vIGJpdCBvZiBjb2RlIHRvIGhhcHBlbiwgYW5kIHNvIGhhcyBub3Qgd3JpdHRlbiBjYXJlZnVsIGVycm9yIGhhbmRsaW5nLlxyXG4vLyBJZiBpdCBkb2VzIG9jY3VyLCBhdCBsZWFzdCB0aGVyZSB3aWxsIGJlIGFuIGVycm9yIGFuZCB3ZSBjYW4gZmlndXJlIG91dCB3aHkuXHJcbi8vIFRoaXMgaXMgcHJlZmVyYWJsZSB0byBjYXN0aW5nIG9yIGRpc2FibGluZyBUeXBlU2NyaXB0IGFsdG9nZXRoZXIgaW4gb3JkZXIgdG9cclxuLy8gYXZvaWQgc3ludGF4IGVycm9ycy5cclxuXHJcbi8vIE9uZSBjb21tb24gZXhhbXBsZSBpcyBhIHJlZ2V4LCB3aGVyZSBpZiB0aGUgcmVnZXggbWF0Y2hlcyB0aGVuIGFsbCBvZiB0aGVcclxuLy8gKG5vbi1vcHRpb25hbCkgcmVnZXggZ3JvdXBzIHdpbGwgYWxzbyBiZSB2YWxpZCwgYnV0IFR5cGVTY3JpcHQgZG9lc24ndCBrbm93LlxyXG5leHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDb2RlIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ1RoaXMgY29kZSBzaG91bGRuXFwndCBiZSByZWFjaGVkJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5ldEZpZWxkcywgTmV0RmllbGRzUmV2ZXJzZSB9IGZyb20gJy4uL3R5cGVzL25ldF9maWVsZHMnO1xyXG5pbXBvcnQgeyBOZXRQYXJhbXMgfSBmcm9tICcuLi90eXBlcy9uZXRfcHJvcHMnO1xyXG5pbXBvcnQgeyBDYWN0Ym90QmFzZVJlZ0V4cCB9IGZyb20gJy4uL3R5cGVzL25ldF90cmlnZ2VyJztcclxuXHJcbmltcG9ydCBsb2dEZWZpbml0aW9ucywge1xyXG4gIGxvZ0RlZmluaXRpb25zVmVyc2lvbnMsXHJcbiAgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4gIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuICBQYXJzZUhlbHBlckZpZWxkcyxcclxuICBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9ucyxcclxuICBSZXBlYXRpbmdGaWVsZHNUeXBlcyxcclxufSBmcm9tICcuL25ldGxvZ19kZWZzJztcclxuaW1wb3J0IHsgVW5yZWFjaGFibGVDb2RlIH0gZnJvbSAnLi9ub3RfcmVhY2hlZCc7XHJcblxyXG5jb25zdCBzZXBhcmF0b3IgPSAnOic7XHJcbmNvbnN0IG1hdGNoRGVmYXVsdCA9ICdbXjpdKic7XHJcbmNvbnN0IG1hdGNoV2l0aENvbG9uc0RlZmF1bHQgPSAnKD86W146XXw6ICkqPyc7XHJcbmNvbnN0IGZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMgPSBbJ2VmZmVjdCcsICdhYmlsaXR5J107XHJcblxyXG5jb25zdCBkZWZhdWx0UGFyYW1zID0gPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgViBleHRlbmRzIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuPih0eXBlOiBULCB2ZXJzaW9uOiBWLCBpbmNsdWRlPzogc3RyaW5nW10pOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PiA9PiB7XHJcbiAgY29uc3QgbG9nVHlwZSA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbdmVyc2lvbl1bdHlwZV07XHJcbiAgaWYgKGluY2x1ZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW5jbHVkZSA9IE9iamVjdC5rZXlzKGxvZ1R5cGUuZmllbGRzKTtcclxuICAgIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlKSB7XHJcbiAgICAgIGluY2x1ZGUucHVzaChsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbXM6IHtcclxuICAgIFtpbmRleDogbnVtYmVyXToge1xyXG4gICAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZ0tleXM/OiBzdHJpbmdbXTtcclxuICAgICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gICAgICBwb3NzaWJsZUtleXM/OiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG4gIGNvbnN0IGZpcnN0T3B0aW9uYWxGaWVsZCA9IGxvZ1R5cGUuZmlyc3RPcHRpb25hbEZpZWxkO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wLCBpbmRleF0gb2YgT2JqZWN0LmVudHJpZXMobG9nVHlwZS5maWVsZHMpKSB7XHJcbiAgICBpZiAoIWluY2x1ZGUuaW5jbHVkZXMocHJvcCkpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgcGFyYW06IHsgZmllbGQ6IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IG9wdGlvbmFsOiBib29sZWFuOyByZXBlYXRpbmc/OiBib29sZWFuIH0gPSB7XHJcbiAgICAgIGZpZWxkOiBwcm9wLFxyXG4gICAgICBvcHRpb25hbDogZmlyc3RPcHRpb25hbEZpZWxkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgfTtcclxuICAgIGlmIChwcm9wID09PSAndHlwZScpXHJcbiAgICAgIHBhcmFtLnZhbHVlID0gbG9nVHlwZS50eXBlO1xyXG5cclxuICAgIHBhcmFtc1tpbmRleF0gPSBwYXJhbTtcclxuICB9XHJcblxyXG4gIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlICYmIGluY2x1ZGUuaW5jbHVkZXMobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpKSB7XHJcbiAgICBwYXJhbXNbbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleF0gPSB7XHJcbiAgICAgIGZpZWxkOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleCA+PSBmaXJzdE9wdGlvbmFsRmllbGQsXHJcbiAgICAgIHJlcGVhdGluZzogdHJ1ZSxcclxuICAgICAgcmVwZWF0aW5nS2V5czogWy4uLmxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLm5hbWVzXSxcclxuICAgICAgc29ydEtleXM6IGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnNvcnRLZXlzLFxyXG4gICAgICBwcmltYXJ5S2V5OiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wcmltYXJ5S2V5LFxyXG4gICAgICBwb3NzaWJsZUtleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wb3NzaWJsZUtleXNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJhbXMgYXMgUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj47XHJcbn07XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcDxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25UeXBlcyxcclxuICBUS2V5IGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPSBUQmFzZSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID8gVEJhc2UgOiBuZXZlcixcclxuPiA9IHtcclxuICBbbmFtZSBpbiBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9uc1tUS2V5XVsncmVwZWF0aW5nRmllbGRzJ11bJ25hbWVzJ11bbnVtYmVyXV06XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBzdHJpbmdbXTtcclxufVtdO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlQ2hlY2s8XHJcbiAgVEJhc2UgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUQmFzZV0sXHJcbiAgVEtleSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID0gVEJhc2UgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFRCYXNlIDogbmV2ZXIsXHJcbj4gPSBGIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnNbVEtleV1bJ3JlcGVhdGluZ0ZpZWxkcyddWydsYWJlbCddXHJcbiAgPyBSZXBlYXRpbmdGaWVsZHNNYXA8VEtleT4gOlxyXG4gIG5ldmVyO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUXSxcclxuPiA9IFQgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxULCBGPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIFBhcnNlSGVscGVyVHlwZTxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzPiA9XHJcbiAgJiB7XHJcbiAgICBbZmllbGQgaW4ga2V5b2YgTmV0RmllbGRzW1RdXT86IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxULCBmaWVsZD47XHJcbiAgfVxyXG4gICYgeyBjYXB0dXJlPzogYm9vbGVhbiB9O1xyXG5cclxuY29uc3QgaXNSZXBlYXRpbmdGaWVsZCA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4+KFxyXG4gIHJlcGVhdGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gfCB1bmRlZmluZWQsXHJcbik6IHZhbHVlIGlzIFJlcGVhdGluZ0ZpZWxkc01hcDxUPiA9PiB7XHJcbiAgaWYgKHJlcGVhdGluZyAhPT0gdHJ1ZSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICAvLyBBbGxvdyBleGNsdWRpbmcgdGhlIGZpZWxkIHRvIG1hdGNoIGZvciBleHRyYWN0aW9uXHJcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIGZvciAoY29uc3QgZSBvZiB2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBlICE9PSAnb2JqZWN0JylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlSGVscGVyID0gPFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXM+KFxyXG4gIHBhcmFtczogUGFyc2VIZWxwZXJUeXBlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gIGRlZktleTogVCxcclxuICBmaWVsZHM6IFBhcnRpYWw8UGFyc2VIZWxwZXJGaWVsZHM8VD4+LFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgcGFyYW1zID0gcGFyYW1zID8/IHt9O1xyXG4gIGNvbnN0IHZhbGlkRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IGluZGV4IGluIGZpZWxkcykge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xyXG4gICAgaWYgKGZpZWxkKVxyXG4gICAgICB2YWxpZEZpZWxkcy5wdXNoKGZpZWxkLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMocGFyYW1zLCBkZWZLZXksIFsnY2FwdHVyZScsIC4uLnZhbGlkRmllbGRzXSk7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGxhc3Qga2V5IHdlIGNhcmUgYWJvdXQsIHNvIHdlIGNhbiBzaG9ydGVuIHRoZSByZWdleCBpZiBuZWVkZWQuXHJcbiAgY29uc3QgY2FwdHVyZSA9IFJlZ2V4ZXMudHJ1ZUlmVW5kZWZpbmVkKHBhcmFtcy5jYXB0dXJlKTtcclxuICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYikpO1xyXG4gIGxldCBtYXhLZXlTdHI6IHN0cmluZztcclxuICBpZiAoY2FwdHVyZSkge1xyXG4gICAgY29uc3Qga2V5czogRXh0cmFjdDxrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdLCBzdHJpbmc+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcylcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICBsZXQgdG1wS2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0bXBLZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtYXhLZXlTdHIgPSBmaWVsZEtleXNbZmllbGRLZXlzLmxlbmd0aCAtIDFdID8/ICcwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBmaWVsZHNbdG1wS2V5XT8ub3B0aW9uYWwgJiZcclxuICAgICAgICAhKChmaWVsZHNbdG1wS2V5XT8uZmllbGQgPz8gJycpIGluIHBhcmFtcylcclxuICAgICAgKVxyXG4gICAgICAgIHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgIG1heEtleVN0ciA9IHRtcEtleSA/PyAnMCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1heEtleVN0ciA9ICcwJztcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkc1trZXldID8/IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2tleV0/LmZpZWxkO1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQgJiYgZmllbGROYW1lIGluIHBhcmFtcylcclxuICAgICAgICBtYXhLZXlTdHIgPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG1heEtleSA9IHBhcnNlSW50KG1heEtleVN0cik7XHJcblxyXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgQWJpbGl0eSB0byBoYW5kbGUgYW9lIGFuZCBub24tYW9lLlxyXG4gIGNvbnN0IGFiaWxpdHlNZXNzYWdlVHlwZSA9XHJcbiAgICBgKD86JHtsb2dEZWZpbml0aW9ucy5BYmlsaXR5Lm1lc3NhZ2VUeXBlfXwke2xvZ0RlZmluaXRpb25zLk5ldHdvcmtBT0VBYmlsaXR5Lm1lc3NhZ2VUeXBlfSlgO1xyXG4gIGNvbnN0IGFiaWxpdHlIZXhDb2RlID0gJyg/OjE1fDE2KSc7XHJcblxyXG4gIC8vIEJ1aWxkIHRoZSByZWdleCBmcm9tIHRoZSBmaWVsZHMuXHJcbiAgY29uc3QgcHJlZml4ID0gZGVmS2V5ICE9PSAnQWJpbGl0eScgPyBsb2dEZWZpbml0aW9uc1tkZWZLZXldLm1lc3NhZ2VUeXBlIDogYWJpbGl0eU1lc3NhZ2VUeXBlO1xyXG5cclxuICAvLyBIZXggY29kZXMgYXJlIGEgbWluaW11bSBvZiB0d28gY2hhcmFjdGVycy4gIEFiaWxpdGllcyBhcmUgc3BlY2lhbCBiZWNhdXNlXHJcbiAgLy8gdGhleSBuZWVkIHRvIHN1cHBvcnQgYm90aCAweDE1IGFuZCAweDE2LlxyXG4gIGNvbnN0IHR5cGVBc0hleCA9IHBhcnNlSW50KGxvZ0RlZmluaXRpb25zW2RlZktleV0udHlwZSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgY29uc3QgZGVmYXVsdEhleENvZGUgPSB0eXBlQXNIZXgubGVuZ3RoIDwgMiA/IGAwMCR7dHlwZUFzSGV4fWAuc2xpY2UoLTIpIDogdHlwZUFzSGV4O1xyXG4gIGNvbnN0IGhleENvZGUgPSBkZWZLZXkgIT09ICdBYmlsaXR5JyA/IGRlZmF1bHRIZXhDb2RlIDogYWJpbGl0eUhleENvZGU7XHJcblxyXG4gIGxldCBzdHIgPSAnJztcclxuICBpZiAoY2FwdHVyZSlcclxuICAgIHN0ciArPSBgKD88dGltZXN0YW1wPlxcXFx5e1RpbWVzdGFtcH0pICR7cHJlZml4fSAoPzx0eXBlPiR7aGV4Q29kZX0pYDtcclxuICBlbHNlXHJcbiAgICBzdHIgKz0gYFxcXFx5e1RpbWVzdGFtcH0gJHtwcmVmaXh9ICR7aGV4Q29kZX1gO1xyXG5cclxuICBsZXQgbGFzdEtleSA9IDE7XHJcbiAgZm9yIChjb25zdCBrZXlTdHIgaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBwYXJzZUZpZWxkID0gZmllbGRzW2tleVN0cl07XHJcbiAgICBpZiAocGFyc2VGaWVsZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHBhcnNlRmllbGQuZmllbGQ7XHJcblxyXG4gICAgLy8gUmVnZXggaGFuZGxlcyB0aGVzZSBtYW51YWxseSBhYm92ZSBpbiB0aGUgYHN0cmAgaW5pdGlhbGl6YXRpb24uXHJcbiAgICBpZiAoZmllbGROYW1lID09PSAndGltZXN0YW1wJyB8fCBmaWVsZE5hbWUgPT09ICd0eXBlJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgY29uc3Qga2V5ID0gcGFyc2VJbnQoa2V5U3RyKTtcclxuICAgIC8vIEZpbGwgaW4gYmxhbmtzLlxyXG4gICAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IGtleSAtIGxhc3RLZXkgLSAxO1xyXG4gICAgaWYgKG1pc3NpbmdGaWVsZHMgPT09IDEpXHJcbiAgICAgIHN0ciArPSBgJHtzZXBhcmF0b3J9JHttYXRjaERlZmF1bHR9YDtcclxuICAgIGVsc2UgaWYgKG1pc3NpbmdGaWVsZHMgPiAxKVxyXG4gICAgICBzdHIgKz0gYCg/OiR7c2VwYXJhdG9yfSR7bWF0Y2hEZWZhdWx0fSl7JHttaXNzaW5nRmllbGRzfX1gO1xyXG4gICAgbGFzdEtleSA9IGtleTtcclxuXHJcbiAgICBzdHIgKz0gc2VwYXJhdG9yO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcGFyc2VGaWVsZCAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkZWZLZXl9OiBpbnZhbGlkIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHBhcnNlRmllbGQpfWApO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkRGVmYXVsdCA9IGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMuaW5jbHVkZXMoZmllbGROYW1lKVxyXG4gICAgICA/IG1hdGNoV2l0aENvbG9uc0RlZmF1bHRcclxuICAgICAgOiBtYXRjaERlZmF1bHQ7XHJcbiAgICBjb25zdCBkZWZhdWx0RmllbGRWYWx1ZSA9IHBhcnNlRmllbGQudmFsdWU/LnRvU3RyaW5nKCkgPz8gZmllbGREZWZhdWx0O1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHBhcmFtc1tmaWVsZE5hbWVdO1xyXG5cclxuICAgIGlmIChpc1JlcGVhdGluZ0ZpZWxkKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcsIGZpZWxkVmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IHJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvciA9ICcoPzokfDopJztcclxuICAgICAgbGV0IHJlcGVhdGluZ0FycmF5OiBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gfCB1bmRlZmluZWQgPSBmaWVsZFZhbHVlO1xyXG5cclxuICAgICAgY29uc3Qgc29ydEtleXMgPSBmaWVsZHNba2V5U3RyXT8uc29ydEtleXM7XHJcbiAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSBmaWVsZHNba2V5U3RyXT8ucHJpbWFyeUtleTtcclxuICAgICAgY29uc3QgcG9zc2libGVLZXlzID0gZmllbGRzW2tleVN0cl0/LnBvc3NpYmxlS2V5cztcclxuXHJcbiAgICAgIC8vIHByaW1hcnlLZXkgaXMgcmVxdWlyZWQgaWYgdGhpcyBpcyBhIHJlcGVhdGluZyBmaWVsZCBwZXIgdHlwZWRlZiBpbiBuZXRsb2dfZGVmcy50c1xyXG4gICAgICAvLyBTYW1lIHdpdGggcG9zc2libGVLZXlzXHJcbiAgICAgIGlmIChwcmltYXJ5S2V5ID09PSB1bmRlZmluZWQgfHwgcG9zc2libGVLZXlzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ29kZSgpO1xyXG5cclxuICAgICAgLy8gQWxsb3cgc29ydGluZyBpZiBuZWVkZWRcclxuICAgICAgaWYgKHNvcnRLZXlzKSB7XHJcbiAgICAgICAgLy8gQWxzbyBzb3J0IG91ciB2YWxpZCBrZXlzIGxpc3RcclxuICAgICAgICBwb3NzaWJsZUtleXMuc29ydCgobGVmdCwgcmlnaHQpID0+IGxlZnQudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0LnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICBpZiAocmVwZWF0aW5nQXJyYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVwZWF0aW5nQXJyYXkgPSBbLi4ucmVwZWF0aW5nQXJyYXldLnNvcnQoXHJcbiAgICAgICAgICAgIChsZWZ0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcmlnaHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAvLyBXZSBjaGVjayB0aGUgdmFsaWRpdHkgb2YgbGVmdC9yaWdodCBiZWNhdXNlIHRoZXkncmUgdXNlci1zdXBwbGllZFxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCAhPT0gJ29iamVjdCcgfHwgbGVmdFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgbGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgbGVmdFZhbHVlID0gbGVmdFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnRWYWx1ZSAhPT0gJ3N0cmluZycgfHwgIXBvc3NpYmxlS2V5cz8uaW5jbHVkZXMobGVmdFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnIHx8IHJpZ2h0W3ByaW1hcnlLZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCByaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgcmlnaHRWYWx1ZSA9IHJpZ2h0W3ByaW1hcnlLZXldO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmlnaHRWYWx1ZSAhPT0gJ3N0cmluZycgfHwgIXBvc3NpYmxlS2V5cz8uaW5jbHVkZXMocmlnaHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCByaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGxlZnRWYWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUocmlnaHRWYWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhbm9uUmVwczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfVtdIHwgdW5kZWZpbmVkID0gcmVwZWF0aW5nQXJyYXk7XHJcbiAgICAgIC8vIExvb3Agb3ZlciBvdXIgcG9zc2libGUga2V5c1xyXG4gICAgICAvLyBCdWlsZCBhIHJlZ2V4IHRoYXQgY2FuIG1hdGNoIGFueSBwb3NzaWJsZSBrZXkgd2l0aCByZXF1aXJlZCB2YWx1ZXMgc3Vic3RpdHV0ZWQgaW5cclxuICAgICAgcG9zc2libGVLZXlzLmZvckVhY2goKHBvc3NpYmxlS2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVwID0gYW5vblJlcHM/LmZpbmQoKHJlcCkgPT4gcHJpbWFyeUtleSBpbiByZXAgJiYgcmVwW3ByaW1hcnlLZXldID09PSBwb3NzaWJsZUtleSk7XHJcblxyXG4gICAgICAgIGxldCBmaWVsZFJlZ2V4ID0gJyc7XHJcbiAgICAgICAgLy8gUmF0aGVyIHRoYW4gbG9vcGluZyBvdmVyIHRoZSBrZXlzIGRlZmluZWQgb24gdGhlIG9iamVjdCxcclxuICAgICAgICAvLyBsb29wIG92ZXIgdGhlIGJhc2UgdHlwZSBkZWYncyBrZXlzLiBUaGlzIGVuZm9yY2VzIHRoZSBjb3JyZWN0IG9yZGVyLlxyXG4gICAgICAgIGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmdLZXlzPy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGxldCB2YWwgPSByZXA/LltrZXldO1xyXG4gICAgICAgICAgaWYgKHJlcCA9PT0gdW5kZWZpbmVkIHx8ICEoa2V5IGluIHJlcCkpIHtcclxuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIGZvciB0aGlzIGtleVxyXG4gICAgICAgICAgICAvLyBpbnNlcnQgYSBwbGFjZWhvbGRlciwgdW5sZXNzIGl0J3MgdGhlIHByaW1hcnkga2V5XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHByaW1hcnlLZXkpXHJcbiAgICAgICAgICAgICAgdmFsID0gcG9zc2libGVLZXk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbC5zb21lKCh2KSA9PiB0eXBlb2YgdiAhPT0gJ3N0cmluZycpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkUmVnZXggKz0gUmVnZXhlcy5tYXliZUNhcHR1cmUoXHJcbiAgICAgICAgICAgIGtleSA9PT0gcHJpbWFyeUtleSA/IGZhbHNlIDogY2FwdHVyZSxcclxuICAgICAgICAgICAgLy8gQWxsIGNhcHR1cmluZyBncm91cHMgYXJlIGBmaWVsZE5hbWVgICsgYHBvc3NpYmxlS2V5YCwgZS5nLiBgcGFpcklzQ2FzdGluZzFgXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZSArIHBvc3NpYmxlS2V5LFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgKSArXHJcbiAgICAgICAgICAgIHJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkUmVnZXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc3RyICs9IGAoPzoke2ZpZWxkUmVnZXh9KSR7cmVwICE9PSB1bmRlZmluZWQgPyAnJyA6ICc/J31gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcpIHtcclxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlcGVhdGluZyBmaWVsZCBidXQgdGhlIGFjdHVhbCB2YWx1ZSBpcyBlbXB0eSBvciBvdGhlcndpc2UgaW52YWxpZCxcclxuICAgICAgLy8gZG9uJ3QgcHJvY2VzcyBmdXJ0aGVyLiBXZSBjYW4ndCB1c2UgYGNvbnRpbnVlYCBpbiB0aGUgYWJvdmUgYmxvY2sgYmVjYXVzZSB0aGF0XHJcbiAgICAgIC8vIHdvdWxkIHNraXAgdGhlIGVhcmx5LW91dCBicmVhayBhdCB0aGUgZW5kIG9mIHRoZSBsb29wLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RyICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgLy8gbW9yZSBhY2N1cmF0ZSB0eXBlIGluc3RlYWQgb2YgYGFzYCBjYXN0XHJcbiAgICAgICAgICAvLyBtYXliZSB0aGlzIGZ1bmN0aW9uIG5lZWRzIGEgcmVmYWN0b3JpbmdcclxuICAgICAgICAgIGNhcHR1cmUsXHJcbiAgICAgICAgICBmaWVsZE5hbWUsXHJcbiAgICAgICAgICBmaWVsZFZhbHVlLFxyXG4gICAgICAgICAgZGVmYXVsdEZpZWxkVmFsdWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHIgKz0gZmllbGRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UncmUgbm90IGNhcHR1cmluZyBhbmQgZG9uJ3QgY2FyZSBhYm91dCBmdXR1cmUgZmllbGRzLlxyXG4gICAgaWYgKGtleSA+PSBtYXhLZXkpXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgc3RyICs9ICcoPzokfDopJztcclxuXHJcbiAgcmV0dXJuIFJlZ2V4ZXMucGFyc2Uoc3RyKSBhcyBDYWN0Ym90QmFzZVJlZ0V4cDxUPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZFJlZ2V4ID0gPFQgZXh0ZW5kcyBrZXlvZiBOZXRQYXJhbXM+KFxyXG4gIHR5cGU6IFQsXHJcbiAgcGFyYW1zPzogUGFyc2VIZWxwZXJUeXBlPFQ+LFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSGVscGVyKHBhcmFtcywgdHlwZSwgZGVmYXVsdFBhcmFtcyh0eXBlLCBSZWdleGVzLmxvZ1ZlcnNpb24pKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2V4ZXMge1xyXG4gIHN0YXRpYyBsb2dWZXJzaW9uOiBMb2dEZWZpbml0aW9uVmVyc2lvbnMgPSAnbGF0ZXN0JztcclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjAtMHgxNC1uZXR3b3Jrc3RhcnRzY2FzdGluZ1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGFydHNVc2luZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXJ0c1VzaW5nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3RhcnRzVXNpbmcnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhcnRzVXNpbmcnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eShwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FiaWxpdHknLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKlxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYWJpbGl0eWAgaW5zdGVhZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhYmlsaXR5RnVsbChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWJpbGl0eShwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjctMHgxYi1uZXR3b3JrdGFyZ2V0aWNvbi1oZWFkLW1hcmtlclxyXG4gICAqL1xyXG4gIHN0YXRpYyBoZWFkTWFya2VyKHBhcmFtcz86IE5ldFBhcmFtc1snSGVhZE1hcmtlciddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0hlYWRNYXJrZXInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnSGVhZE1hcmtlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMy0weDAzLWFkZGNvbWJhdGFudFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRlZENvbWJhdGFudChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FkZGVkQ29tYmF0YW50J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWRkZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gcGFyc2VIZWxwZXIoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ0FkZGVkQ29tYmF0YW50JyxcclxuICAgICAgZGVmYXVsdFBhcmFtcygnQWRkZWRDb21iYXRhbnQnLCBSZWdleGVzLmxvZ1ZlcnNpb24sIFtcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3RpbWVzdGFtcCcsXHJcbiAgICAgICAgJ2lkJyxcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgIF0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAzLTB4MDMtYWRkY29tYmF0YW50XHJcbiAgICovXHJcbiAgc3RhdGljIGFkZGVkQ29tYmF0YW50RnVsbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWRkZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWRkZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWRkZWRDb21iYXRhbnQnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDQtMHgwNC1yZW1vdmVjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZpbmdDb21iYXRhbnQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1JlbW92ZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnUmVtb3ZlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdSZW1vdmVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2LTB4MWEtbmV0d29ya2J1ZmZcclxuICAgKi9cclxuICBzdGF0aWMgZ2FpbnNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydHYWluc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhaW5zRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0dhaW5zRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWZlciBnYWluc0VmZmVjdCBvdmVyIHRoaXMgZnVuY3Rpb24gdW5sZXNzIHlvdSByZWFsbHkgbmVlZCBleHRyYSBkYXRhLlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM4LTB4MjYtbmV0d29ya3N0YXR1c2VmZmVjdHNcclxuICAgKi9cclxuICBzdGF0aWMgc3RhdHVzRWZmZWN0RXhwbGljaXQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXR1c0VmZmVjdCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGF0dXNFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhdHVzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMwLTB4MWUtbmV0d29ya2J1ZmZyZW1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgbG9zZXNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydMb3Nlc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0xvc2VzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0xvc2VzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM1LTB4MjMtbmV0d29ya3RldGhlclxyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXRoZXIocGFyYW1zPzogTmV0UGFyYW1zWydUZXRoZXInXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdUZXRoZXInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnVGV0aGVyJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICd0YXJnZXQnIHdhcyBkZWZlYXRlZCBieSAnc291cmNlJ1xyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1LTB4MTktbmV0d29ya2RlYXRoXHJcbiAgICovXHJcbiAgc3RhdGljIHdhc0RlZmVhdGVkKHBhcmFtcz86IE5ldFBhcmFtc1snV2FzRGVmZWF0ZWQnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdXYXNEZWZlYXRlZCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdXYXNEZWZlYXRlZCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNC0weDE4LW5ldHdvcmtkb3RcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29ya0RvVChwYXJhbXM/OiBOZXRQYXJhbXNbJ05ldHdvcmtEb1QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOZXR3b3JrRG9UJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05ldHdvcmtEb1QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGVjaG8ocGFyYW1zPzogTmV0UGFyYW1zWydHYW1lTG9nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdlY2hvJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG4gICAgcGFyYW1zLmNvZGUgPSAnMDAzOCc7XHJcbiAgICByZXR1cm4gUmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZGlhbG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnZGlhbG9nJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG4gICAgcGFyYW1zLmNvZGUgPSAnMDA0NCc7XHJcbiAgICByZXR1cm4gUmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgbWVzc2FnZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ21lc3NhZ2UnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcbiAgICBwYXJhbXMuY29kZSA9ICcwODM5JztcclxuICAgIHJldHVybiBSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpZWxkczogY29kZSwgbmFtZSwgbGluZSwgY2FwdHVyZVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnR2FtZUxvZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZ2FtZU5hbWVMb2cocGFyYW1zPzogTmV0UGFyYW1zWydHYW1lTG9nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRhYmlsaXR5LlxyXG4gICAgcmV0dXJuIFJlZ2V4ZXMuZ2FtZUxvZyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMTItMHgwYy1wbGF5ZXJzdGF0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0Q2hhbmdlKHBhcmFtcz86IE5ldFBhcmFtc1snUGxheWVyU3RhdHMnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdQbGF5ZXJTdGF0cyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdQbGF5ZXJTdGF0cycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMS0weDAxLWNoYW5nZXpvbmVcclxuICAgKi9cclxuICBzdGF0aWMgY2hhbmdlWm9uZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0NoYW5nZVpvbmUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdDaGFuZ2Vab25lJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NoYW5nZVpvbmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzMtMHgyMS1uZXR3b3JrNmQtYWN0b3ItY29udHJvbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBuZXR3b3JrNmQocGFyYW1zPzogTmV0UGFyYW1zWydBY3RvckNvbnRyb2wnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBY3RvckNvbnRyb2wnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JDb250cm9sJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM0LTB4MjItbmV0d29ya25hbWV0b2dnbGVcclxuICAgKi9cclxuICBzdGF0aWMgbmFtZVRvZ2dsZShwYXJhbXM/OiBOZXRQYXJhbXNbJ05hbWVUb2dnbGUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOYW1lVG9nZ2xlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05hbWVUb2dnbGUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDAtMHgyOC1tYXBcclxuICAgKi9cclxuICBzdGF0aWMgbWFwKHBhcmFtcz86IE5ldFBhcmFtc1snTWFwJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnTWFwJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ01hcCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS00MS0weDI5LXN5c3RlbWxvZ21lc3NhZ2VcclxuICAgKi9cclxuICBzdGF0aWMgc3lzdGVtTG9nTWVzc2FnZShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3lzdGVtTG9nTWVzc2FnZSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTeXN0ZW1Mb2dNZXNzYWdlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N5c3RlbUxvZ01lc3NhZ2UnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU3LTB4MTAxLW1hcGVmZmVjdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXBFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydNYXBFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdNYXBFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTWFwRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MS0weDEwNS1jb21iYXRhbnRtZW1vcnlcclxuICAgKi9cclxuICBzdGF0aWMgY29tYmF0YW50TWVtb3J5KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb21iYXRhbnRNZW1vcnknXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29tYmF0YW50TWVtb3J5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbWJhdGFudE1lbW9yeScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjMtMHgxMDctc3RhcnRzdXNpbmdleHRyYVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGFydHNVc2luZ0V4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTdGFydHNVc2luZ0V4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXJ0c1VzaW5nRXh0cmEnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhcnRzVXNpbmdFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjQtMHgxMDgtYWJpbGl0eWV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eUV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHlFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5RXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBidWlsZGluZyBuYW1lZCBjYXB0dXJlIGdyb3VwXHJcbiAgICovXHJcbiAgc3RhdGljIG1heWJlQ2FwdHVyZShcclxuICAgIGNhcHR1cmU6IGJvb2xlYW4sXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCB1bmRlZmluZWQsXHJcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZSA/PyBtYXRjaERlZmF1bHQ7XHJcbiAgICB2YWx1ZSA9IFJlZ2V4ZXMuYW55T2YodmFsdWUpO1xyXG4gICAgcmV0dXJuIGNhcHR1cmUgPyBSZWdleGVzLm5hbWVkQ2FwdHVyZShuYW1lLCB2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvcHRpb25hbChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCg/OiR7c3RyfSk/YDtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZXMgYSBuYW1lZCByZWdleCBjYXB0dXJlIGdyb3VwIG5hbWVkIHxuYW1lfCBmb3IgdGhlIG1hdGNoIHx2YWx1ZXwuXHJcbiAgc3RhdGljIG5hbWVkQ2FwdHVyZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKG5hbWUuaW5jbHVkZXMoJz4nKSlcclxuICAgICAgY29uc29sZS5lcnJvcihgXCIke25hbWV9XCIgY29udGFpbnMgXCI+XCIuYCk7XHJcbiAgICBpZiAobmFtZS5pbmNsdWRlcygnPCcpKVxyXG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7bmFtZX1cIiBjb250YWlucyBcIj5cIi5gKTtcclxuXHJcbiAgICByZXR1cm4gYCg/PCR7bmFtZX0+JHt2YWx1ZX0pYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGZvciB0dXJuaW5nIG11bHRpcGxlIGFyZ3MgaW50byBhIHVuaW9uZWQgcmVndWxhciBleHByZXNzaW9uLlxyXG4gICAqIGFueU9mKHgsIHksIHopIG9yIGFueU9mKFt4LCB5LCB6XSkgZG8gdGhlIHNhbWUgdGhpbmcsIGFuZCByZXR1cm4gKD86eHx5fHopLlxyXG4gICAqIGFueU9mKHgpIG9yIGFueU9mKHgpIG9uIGl0cyBvd24gc2ltcGxpZmllcyB0byBqdXN0IHguXHJcbiAgICogYXJncyBtYXkgYmUgc3RyaW5ncyBvciBSZWdFeHAsIGFsdGhvdWdoIGFueSBhZGRpdGlvbmFsIG1hcmtlcnMgdG8gUmVnRXhwXHJcbiAgICogbGlrZSAvaW5zZW5zaXRpdmUvaSBhcmUgZHJvcHBlZC5cclxuICAgKi9cclxuICBzdGF0aWMgYW55T2YoLi4uYXJnczogKHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVnRXhwKVtdKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFueU9mQXJyYXkgPSAoYXJyYXk6IHJlYWRvbmx5IChzdHJpbmcgfCBSZWdFeHApW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgICBjb25zdCBbZWxlbV0gPSBhcnJheTtcclxuICAgICAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCAmJiBhcnJheS5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgcmV0dXJuIGAke2VsZW0gaW5zdGFuY2VvZiBSZWdFeHAgPyBlbGVtLnNvdXJjZSA6IGVsZW19YDtcclxuICAgICAgcmV0dXJuIGAoPzoke2FycmF5Lm1hcCgoZWxlbSkgPT4gZWxlbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IGVsZW0uc291cmNlIDogZWxlbSkuam9pbignfCcpfSlgO1xyXG4gICAgfTtcclxuICAgIGxldCBhcnJheTogcmVhZG9ubHkgKHN0cmluZyB8IFJlZ0V4cClbXSA9IFtdO1xyXG4gICAgY29uc3QgW2ZpcnN0QXJnXSA9IGFyZ3M7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ3N0cmluZycgfHwgZmlyc3RBcmcgaW5zdGFuY2VvZiBSZWdFeHApXHJcbiAgICAgICAgYXJyYXkgPSBbZmlyc3RBcmddO1xyXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpcnN0QXJnKSlcclxuICAgICAgICBhcnJheSA9IGZpcnN0QXJnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgYXJyYXkgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRPRE86IG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICBhcnJheSA9IGFyZ3MgYXMgcmVhZG9ubHkgc3RyaW5nW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW55T2ZBcnJheShhcnJheSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2UocmVnZXhwU3RyaW5nOiBSZWdFeHAgfCBzdHJpbmcgfCBDYWN0Ym90QmFzZVJlZ0V4cDwnTm9uZSc+KTogUmVnRXhwIHtcclxuICAgIGNvbnN0IGtDYWN0Ym90Q2F0ZWdvcmllcyA9IHtcclxuICAgICAgVGltZXN0YW1wOiAnXi57MTR9JyxcclxuICAgICAgTmV0VGltZXN0YW1wOiAnLnszM30nLFxyXG4gICAgICBOZXRGaWVsZDogJyg/OltefF0qXFxcXHwpJyxcclxuICAgICAgTG9nVHlwZTogJ1swLTlBLUZhLWZdezJ9JyxcclxuICAgICAgQWJpbGl0eUNvZGU6ICdbMC05QS1GYS1mXXsxLDh9JyxcclxuICAgICAgT2JqZWN0SWQ6ICdbMC05QS1GXXs4fScsXHJcbiAgICAgIC8vIE1hdGNoZXMgYW55IGNoYXJhY3RlciBuYW1lIChpbmNsdWRpbmcgZW1wdHkgc3RyaW5ncyB3aGljaCB0aGUgRkZYSVZcclxuICAgICAgLy8gQUNUIHBsdWdpbiBjYW4gZ2VuZXJhdGUgd2hlbiB1bmtub3duKS5cclxuICAgICAgTmFtZTogJyg/OlteXFxcXHM6fF0rKD86IFteXFxcXHM6fF0rKT98KScsXHJcbiAgICAgIC8vIEZsb2F0cyBjYW4gaGF2ZSBjb21tYSBhcyBzZXBhcmF0b3IgaW4gRkZYSVYgcGx1Z2luIG91dHB1dDogaHR0cHM6Ly9naXRodWIuY29tL3JhdmFobi9GRlhJVl9BQ1RfUGx1Z2luL2lzc3Vlcy8xMzdcclxuICAgICAgRmxvYXQ6ICctP1swLTldKyg/OlsuLF1bMC05XSspPyg/OkUtP1swLTldKyk/JyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWxsIHJlZ2V4ZXMgaW4gY2FjdGJvdCBhcmUgY2FzZSBpbnNlbnNpdGl2ZS5cclxuICAgIC8vIFRoaXMgYXZvaWRzIGhlYWRhY2hlcyBhcyB0aGluZ3MgbGlrZSBgVmljZSBhbmQgVmFuaXR5YCB0dXJucyBpbnRvXHJcbiAgICAvLyBgVmljZSBBbmQgVmFuaXR5YCwgZXNwZWNpYWxseSBmb3IgRnJlbmNoIGFuZCBHZXJtYW4uICBJdCBhcHBlYXJzIHRvXHJcbiAgICAvLyBoYXZlIGEgfjIwJSByZWdleCBwYXJzaW5nIG92ZXJoZWFkLCBidXQgYXQgbGVhc3QgdGhleSB3b3JrLlxyXG4gICAgbGV0IG1vZGlmaWVycyA9ICdpJztcclxuICAgIGlmIChyZWdleHBTdHJpbmcgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgbW9kaWZpZXJzICs9IChyZWdleHBTdHJpbmcuZ2xvYmFsID8gJ2cnIDogJycpICtcclxuICAgICAgICAocmVnZXhwU3RyaW5nLm11bHRpbGluZSA/ICdtJyA6ICcnKTtcclxuICAgICAgcmVnZXhwU3RyaW5nID0gcmVnZXhwU3RyaW5nLnNvdXJjZTtcclxuICAgIH1cclxuICAgIHJlZ2V4cFN0cmluZyA9IHJlZ2V4cFN0cmluZy5yZXBsYWNlKC9cXFxceVxceyguKj8pXFx9L2csIChtYXRjaCwgZ3JvdXApID0+IHtcclxuICAgICAgcmV0dXJuIGtDYWN0Ym90Q2F0ZWdvcmllc1tncm91cCBhcyBrZXlvZiB0eXBlb2Yga0NhY3Rib3RDYXRlZ29yaWVzXSB8fCBtYXRjaDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwU3RyaW5nLCBtb2RpZmllcnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGlrZSBSZWdleC5SZWdleGVzLnBhcnNlLCBidXQgZm9yY2UgZ2xvYmFsIGZsYWcuXHJcbiAgc3RhdGljIHBhcnNlR2xvYmFsKHJlZ2V4cFN0cmluZzogUmVnRXhwIHwgc3RyaW5nKTogUmVnRXhwIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gUmVnZXhlcy5wYXJzZShyZWdleHBTdHJpbmcpO1xyXG4gICAgbGV0IG1vZGlmaWVycyA9ICdnaSc7XHJcbiAgICBpZiAocmVnZXhwU3RyaW5nIGluc3RhbmNlb2YgUmVnRXhwKVxyXG4gICAgICBtb2RpZmllcnMgKz0gcmVnZXhwU3RyaW5nLm11bHRpbGluZSA/ICdtJyA6ICcnO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXguc291cmNlLCBtb2RpZmllcnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRydWVJZlVuZGVmaW5lZCh2YWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHZhbGlkYXRlUGFyYW1zKFxyXG4gICAgZjogUmVhZG9ubHk8eyBbczogc3RyaW5nXTogdW5rbm93biB9PixcclxuICAgIGZ1bmNOYW1lOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IFJlYWRvbmx5PHN0cmluZ1tdPixcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChmID09PSBudWxsKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZiAodHlwZW9mIGYgIT09ICdvYmplY3QnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZik7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtmdW5jTmFtZX06IGludmFsaWQgcGFyYW1ldGVyICcke2tleX0nLiAgYCArXHJcbiAgICAgICAgICAgIGBWYWxpZCBwYXJhbXM6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmV0RmllbGRzLCBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcbmltcG9ydCB7IENhY3Rib3RCYXNlUmVnRXhwIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3RyaWdnZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBsb2dEZWZpbml0aW9uc1ZlcnNpb25zLFxyXG4gIExvZ0RlZmluaXRpb25UeXBlcyxcclxuICBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbiAgUGFyc2VIZWxwZXJGaWVsZHMsXHJcbiAgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnMsXHJcbiAgUmVwZWF0aW5nRmllbGRzVHlwZXMsXHJcbn0gZnJvbSAnLi9uZXRsb2dfZGVmcyc7XHJcbmltcG9ydCB7IFVucmVhY2hhYmxlQ29kZSB9IGZyb20gJy4vbm90X3JlYWNoZWQnO1xyXG5pbXBvcnQgUmVnZXhlcyBmcm9tICcuL3JlZ2V4ZXMnO1xyXG5cclxuY29uc3Qgc2VwYXJhdG9yID0gJ1xcXFx8JztcclxuY29uc3QgbWF0Y2hEZWZhdWx0ID0gJ1tefF0qJztcclxuXHJcbi8vIElmIE5ldFJlZ2V4ZXMuc2V0RmxhZ1RyYW5zbGF0aW9uc05lZWRlZCBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBhbnlcclxuLy8gcmVnZXggY3JlYXRlZCB0aGF0IHJlcXVpcmVzIGEgdHJhbnNsYXRpb24gd2lsbCBiZWdpbiB3aXRoIHRoaXMgc3RyaW5nXHJcbi8vIGFuZCBtYXRjaCB0aGUgbWFnaWNTdHJpbmdSZWdleC4gIFRoaXMgaXMgbWF5YmUgYSBiaXQgZ29vZnksIGJ1dCBpc1xyXG4vLyBhIHByZXR0eSBzdHJhaWdodGZvcndhcmQgd2F5IHRvIG1hcmsgcmVnZXhlcyBmb3IgdHJhbnNsYXRpb25zLlxyXG4vLyBJZiBpc3N1ZSAjMTMwNiBpcyBldmVyIHJlc29sdmVkLCB3ZSBjYW4gcmVtb3ZlIHRoaXMuXHJcbmNvbnN0IG1hZ2ljVHJhbnNsYXRpb25TdHJpbmcgPSBgXl5gO1xyXG5jb25zdCBtYWdpY1N0cmluZ1JlZ2V4ID0gL15cXF5cXF4vO1xyXG5cclxuLy8gY2FuJ3Qgc2ltcGx5IGV4cG9ydCB0aGlzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L3B1bGwvNDk1NyNkaXNjdXNzaW9uX3IxMDAyNTkwNTg5XHJcbmNvbnN0IGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uQXNDb25zdCA9IFtcclxuICAnYWJpbGl0eScsXHJcbiAgJ25hbWUnLFxyXG4gICdzb3VyY2UnLFxyXG4gICd0YXJnZXQnLFxyXG4gICdsaW5lJyxcclxuXSBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uQXNDb25zdDtcclxuZXhwb3J0IHR5cGUgS2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb24gPSB0eXBlb2Yga2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb25Bc0NvbnN0W251bWJlcl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUxvZ0NvZGVzID0ge1xyXG4gIGVjaG86ICcwMDM4JyxcclxuICBkaWFsb2c6ICcwMDQ0JyxcclxuICBtZXNzYWdlOiAnMDgzOScsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBkZWZhdWx0UGFyYW1zID0gPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgViBleHRlbmRzIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuPih0eXBlOiBULCB2ZXJzaW9uOiBWLCBpbmNsdWRlPzogc3RyaW5nW10pOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PiA9PiB7XHJcbiAgY29uc3QgbG9nVHlwZSA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbdmVyc2lvbl1bdHlwZV07XHJcbiAgaWYgKGluY2x1ZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW5jbHVkZSA9IE9iamVjdC5rZXlzKGxvZ1R5cGUuZmllbGRzKTtcclxuICAgIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlKSB7XHJcbiAgICAgIGluY2x1ZGUucHVzaChsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbXM6IHtcclxuICAgIFtpbmRleDogbnVtYmVyXToge1xyXG4gICAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZ0tleXM/OiBzdHJpbmdbXTtcclxuICAgICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gICAgICBwb3NzaWJsZUtleXM/OiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG4gIGNvbnN0IGZpcnN0T3B0aW9uYWxGaWVsZCA9IGxvZ1R5cGUuZmlyc3RPcHRpb25hbEZpZWxkO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wLCBpbmRleF0gb2YgT2JqZWN0LmVudHJpZXMobG9nVHlwZS5maWVsZHMpKSB7XHJcbiAgICBpZiAoIWluY2x1ZGUuaW5jbHVkZXMocHJvcCkpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgcGFyYW06IHsgZmllbGQ6IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IG9wdGlvbmFsOiBib29sZWFuOyByZXBlYXRpbmc/OiBib29sZWFuIH0gPSB7XHJcbiAgICAgIGZpZWxkOiBwcm9wLFxyXG4gICAgICBvcHRpb25hbDogZmlyc3RPcHRpb25hbEZpZWxkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgfTtcclxuICAgIGlmIChwcm9wID09PSAndHlwZScpXHJcbiAgICAgIHBhcmFtLnZhbHVlID0gbG9nVHlwZS50eXBlO1xyXG5cclxuICAgIHBhcmFtc1tpbmRleF0gPSBwYXJhbTtcclxuICB9XHJcblxyXG4gIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlICYmIGluY2x1ZGUuaW5jbHVkZXMobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpKSB7XHJcbiAgICBwYXJhbXNbbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleF0gPSB7XHJcbiAgICAgIGZpZWxkOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleCA+PSBmaXJzdE9wdGlvbmFsRmllbGQsXHJcbiAgICAgIHJlcGVhdGluZzogdHJ1ZSxcclxuICAgICAgcmVwZWF0aW5nS2V5czogWy4uLmxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLm5hbWVzXSxcclxuICAgICAgc29ydEtleXM6IGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnNvcnRLZXlzLFxyXG4gICAgICBwcmltYXJ5S2V5OiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wcmltYXJ5S2V5LFxyXG4gICAgICBwb3NzaWJsZUtleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wb3NzaWJsZUtleXNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJhbXMgYXMgUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj47XHJcbn07XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcDxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25UeXBlcyxcclxuICBUS2V5IGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPSBUQmFzZSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID8gVEJhc2UgOiBuZXZlcixcclxuPiA9IHtcclxuICBbbmFtZSBpbiBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9uc1tUS2V5XVsncmVwZWF0aW5nRmllbGRzJ11bJ25hbWVzJ11bbnVtYmVyXV06XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBzdHJpbmdbXTtcclxufVtdO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlQ2hlY2s8XHJcbiAgVEJhc2UgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUQmFzZV0sXHJcbiAgVEtleSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID0gVEJhc2UgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFRCYXNlIDogbmV2ZXIsXHJcbj4gPSBGIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnNbVEtleV1bJ3JlcGVhdGluZ0ZpZWxkcyddWydsYWJlbCddXHJcbiAgPyBSZXBlYXRpbmdGaWVsZHNNYXA8VEtleT4gOlxyXG4gIG5ldmVyO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXMsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUXSxcclxuPiA9IFQgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxULCBGPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIFBhcnNlSGVscGVyVHlwZTxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzPiA9XHJcbiAgJiB7XHJcbiAgICBbZmllbGQgaW4ga2V5b2YgTmV0RmllbGRzW1RdXT86IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxULCBmaWVsZD47XHJcbiAgfVxyXG4gICYgeyBjYXB0dXJlPzogYm9vbGVhbiB9O1xyXG5cclxuY29uc3QgaXNSZXBlYXRpbmdGaWVsZCA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvblR5cGVzLFxyXG4+KFxyXG4gIHJlcGVhdGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gfCB1bmRlZmluZWQsXHJcbik6IHZhbHVlIGlzIFJlcGVhdGluZ0ZpZWxkc01hcDxUPiA9PiB7XHJcbiAgaWYgKHJlcGVhdGluZyAhPT0gdHJ1ZSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICAvLyBBbGxvdyBleGNsdWRpbmcgdGhlIGZpZWxkIHRvIG1hdGNoIGZvciBleHRyYWN0aW9uXHJcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIGZvciAoY29uc3QgZSBvZiB2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBlICE9PSAnb2JqZWN0JylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlSGVscGVyID0gPFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVHlwZXM+KFxyXG4gIHBhcmFtczogUGFyc2VIZWxwZXJUeXBlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gIGZ1bmNOYW1lOiBzdHJpbmcsXHJcbiAgZmllbGRzOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PixcclxuKTogQ2FjdGJvdEJhc2VSZWdFeHA8VD4gPT4ge1xyXG4gIHBhcmFtcyA9IHBhcmFtcyA/PyB7fTtcclxuICBjb25zdCB2YWxpZEZpZWxkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZm9yIChjb25zdCBpbmRleCBpbiBmaWVsZHMpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcclxuICAgIGlmIChmaWVsZClcclxuICAgICAgdmFsaWRGaWVsZHMucHVzaChmaWVsZC5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKHBhcmFtcywgZnVuY05hbWUsIFsnY2FwdHVyZScsIC4uLnZhbGlkRmllbGRzXSk7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGxhc3Qga2V5IHdlIGNhcmUgYWJvdXQsIHNvIHdlIGNhbiBzaG9ydGVuIHRoZSByZWdleCBpZiBuZWVkZWQuXHJcbiAgY29uc3QgY2FwdHVyZSA9IFJlZ2V4ZXMudHJ1ZUlmVW5kZWZpbmVkKHBhcmFtcy5jYXB0dXJlKTtcclxuICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYikpO1xyXG4gIGxldCBtYXhLZXlTdHI6IHN0cmluZztcclxuICBpZiAoY2FwdHVyZSkge1xyXG4gICAgY29uc3Qga2V5czogRXh0cmFjdDxrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdLCBzdHJpbmc+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcylcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICBsZXQgdG1wS2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0bXBLZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtYXhLZXlTdHIgPSBmaWVsZEtleXNbZmllbGRLZXlzLmxlbmd0aCAtIDFdID8/ICcwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBmaWVsZHNbdG1wS2V5XT8ub3B0aW9uYWwgJiZcclxuICAgICAgICAhKChmaWVsZHNbdG1wS2V5XT8uZmllbGQgPz8gJycpIGluIHBhcmFtcylcclxuICAgICAgKVxyXG4gICAgICAgIHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgIG1heEtleVN0ciA9IHRtcEtleSA/PyAnMCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1heEtleVN0ciA9ICcwJztcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkc1trZXldID8/IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2tleV0/LmZpZWxkO1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQgJiYgZmllbGROYW1lIGluIHBhcmFtcylcclxuICAgICAgICBtYXhLZXlTdHIgPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG1heEtleSA9IHBhcnNlSW50KG1heEtleVN0cik7XHJcblxyXG4gIC8vIEZvciB0ZXN0aW5nLCBpdCdzIHVzZWZ1bCB0byBrbm93IGlmIHRoaXMgaXMgYSByZWdleCB0aGF0IHJlcXVpcmVzXHJcbiAgLy8gdHJhbnNsYXRpb24uICBXZSB0ZXN0IHRoaXMgYnkgc2VlaW5nIGlmIHRoZXJlIGFyZSBhbnkgc3BlY2lmaWVkXHJcbiAgLy8gZmllbGRzLCBhbmQgaWYgc28sIGluc2VydGluZyBhIG1hZ2ljIHN0cmluZyB0aGF0IHdlIGNhbiBkZXRlY3QuXHJcbiAgLy8gVGhpcyBsZXRzIHVzIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBcInJlZ2V4IHRoYXQgc2hvdWxkIGJlIHRyYW5zbGF0ZWRcIlxyXG4gIC8vIGUuZy4gYSByZWdleCB3aXRoIGB0YXJnZXRgIHNwZWNpZmllZCwgYW5kIFwicmVnZXggdGhhdCBzaG91bGRuJ3RcIlxyXG4gIC8vIGUuZy4gYSBnYWlucyBlZmZlY3Qgd2l0aCBqdXN0IGVmZmVjdElkIHNwZWNpZmllZC5cclxuICBjb25zdCB0cmFuc1BhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykuZmlsdGVyKChrKSA9PiBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbi5pbmNsdWRlcyhrKSk7XHJcbiAgY29uc3QgbmVlZHNUcmFuc2xhdGlvbnMgPSBOZXRSZWdleGVzLmZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgJiYgdHJhbnNQYXJhbXMubGVuZ3RoID4gMDtcclxuXHJcbiAgLy8gQnVpbGQgdGhlIHJlZ2V4IGZyb20gdGhlIGZpZWxkcy5cclxuICBsZXQgc3RyID0gbmVlZHNUcmFuc2xhdGlvbnMgPyBtYWdpY1RyYW5zbGF0aW9uU3RyaW5nIDogJ14nO1xyXG4gIGxldCBsYXN0S2V5ID0gLTE7XHJcbiAgZm9yIChjb25zdCBrZXlTdHIgaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBrZXkgPSBwYXJzZUludChrZXlTdHIpO1xyXG4gICAgLy8gRmlsbCBpbiBibGFua3MuXHJcbiAgICBjb25zdCBtaXNzaW5nRmllbGRzID0ga2V5IC0gbGFzdEtleSAtIDE7XHJcbiAgICBpZiAobWlzc2luZ0ZpZWxkcyA9PT0gMSlcclxuICAgICAgc3RyICs9ICdcXFxceXtOZXRGaWVsZH0nO1xyXG4gICAgZWxzZSBpZiAobWlzc2luZ0ZpZWxkcyA+IDEpXHJcbiAgICAgIHN0ciArPSBgXFxcXHl7TmV0RmllbGR9eyR7bWlzc2luZ0ZpZWxkc319YDtcclxuICAgIGxhc3RLZXkgPSBrZXk7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBmaWVsZHNba2V5U3RyXTtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZnVuY05hbWV9OiBpbnZhbGlkIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gKTtcclxuXHJcbiAgICBjb25zdCBmaWVsZE5hbWUgPSB2YWx1ZS5maWVsZDtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWVsZFZhbHVlID0gdmFsdWUudmFsdWU/LnRvU3RyaW5nKCkgPz8gbWF0Y2hEZWZhdWx0O1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHBhcmFtc1tmaWVsZE5hbWVdO1xyXG5cclxuICAgIGlmIChpc1JlcGVhdGluZ0ZpZWxkKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcsIGZpZWxkVmFsdWUpKSB7XHJcbiAgICAgIGxldCByZXBlYXRpbmdBcnJheTogUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkID0gZmllbGRWYWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHNvcnRLZXlzID0gZmllbGRzW2tleVN0cl0/LnNvcnRLZXlzO1xyXG4gICAgICBjb25zdCBwcmltYXJ5S2V5ID0gZmllbGRzW2tleVN0cl0/LnByaW1hcnlLZXk7XHJcbiAgICAgIGNvbnN0IHBvc3NpYmxlS2V5cyA9IGZpZWxkc1trZXlTdHJdPy5wb3NzaWJsZUtleXM7XHJcblxyXG4gICAgICAvLyBwcmltYXJ5S2V5IGlzIHJlcXVpcmVkIGlmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgcGVyIHR5cGVkZWYgaW4gbmV0bG9nX2RlZnMudHNcclxuICAgICAgLy8gU2FtZSB3aXRoIHBvc3NpYmxlS2V5c1xyXG4gICAgICBpZiAocHJpbWFyeUtleSA9PT0gdW5kZWZpbmVkIHx8IHBvc3NpYmxlS2V5cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNvZGUoKTtcclxuXHJcbiAgICAgIC8vIEFsbG93IHNvcnRpbmcgaWYgbmVlZGVkXHJcbiAgICAgIGlmIChzb3J0S2V5cykge1xyXG4gICAgICAgIC8vIEFsc28gc29ydCBvdXIgdmFsaWQga2V5cyBsaXN0XHJcbiAgICAgICAgcG9zc2libGVLZXlzLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShyaWdodC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgaWYgKHJlcGVhdGluZ0FycmF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlcGVhdGluZ0FycmF5ID0gWy4uLnJlcGVhdGluZ0FycmF5XS5zb3J0KFxyXG4gICAgICAgICAgICAobGVmdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHJpZ2h0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gV2UgY2hlY2sgdGhlIHZhbGlkaXR5IG9mIGxlZnQvcmlnaHQgYmVjYXVzZSB0aGV5J3JlIHVzZXItc3VwcGxpZWRcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnQgIT09ICdvYmplY3QnIHx8IGxlZnRbcHJpbWFyeUtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IGxlZnRbcHJpbWFyeUtleV07XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKGxlZnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCBsZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0ICE9PSAnb2JqZWN0JyB8fCByaWdodFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFsdWUgPSByaWdodFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKHJpZ2h0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsZWZ0VmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0VmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYW5vblJlcHM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH1bXSB8IHVuZGVmaW5lZCA9IHJlcGVhdGluZ0FycmF5O1xyXG4gICAgICAvLyBMb29wIG92ZXIgb3VyIHBvc3NpYmxlIGtleXNcclxuICAgICAgLy8gQnVpbGQgYSByZWdleCB0aGF0IGNhbiBtYXRjaCBhbnkgcG9zc2libGUga2V5IHdpdGggcmVxdWlyZWQgdmFsdWVzIHN1YnN0aXR1dGVkIGluXHJcbiAgICAgIHBvc3NpYmxlS2V5cy5mb3JFYWNoKChwb3NzaWJsZUtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcCA9IGFub25SZXBzPy5maW5kKChyZXApID0+IHByaW1hcnlLZXkgaW4gcmVwICYmIHJlcFtwcmltYXJ5S2V5XSA9PT0gcG9zc2libGVLZXkpO1xyXG5cclxuICAgICAgICBsZXQgZmllbGRSZWdleCA9ICcnO1xyXG4gICAgICAgIC8vIFJhdGhlciB0aGFuIGxvb3Bpbmcgb3ZlciB0aGUga2V5cyBkZWZpbmVkIG9uIHRoZSBvYmplY3QsXHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIHRoZSBiYXNlIHR5cGUgZGVmJ3Mga2V5cy4gVGhpcyBlbmZvcmNlcyB0aGUgY29ycmVjdCBvcmRlci5cclxuICAgICAgICBmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nS2V5cz8uZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBsZXQgdmFsID0gcmVwPy5ba2V5XTtcclxuICAgICAgICAgIGlmIChyZXAgPT09IHVuZGVmaW5lZCB8fCAhKGtleSBpbiByZXApKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSBmb3IgdGhpcyBrZXlcclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGEgcGxhY2Vob2xkZXIsIHVubGVzcyBpdCdzIHRoZSBwcmltYXJ5IGtleVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBwcmltYXJ5S2V5KVxyXG4gICAgICAgICAgICAgIHZhbCA9IHBvc3NpYmxlS2V5O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwuc29tZSgodikgPT4gdHlwZW9mIHYgIT09ICdzdHJpbmcnKSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZFJlZ2V4ICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgICBrZXkgPT09IHByaW1hcnlLZXkgPyBmYWxzZSA6IGNhcHR1cmUsXHJcbiAgICAgICAgICAgIC8vIEFsbCBjYXB0dXJpbmcgZ3JvdXBzIGFyZSBgZmllbGROYW1lYCArIGBwb3NzaWJsZUtleWAsIGUuZy4gYHBhaXJJc0Nhc3RpbmcxYFxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgKyBwb3NzaWJsZUtleSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBkZWZhdWx0RmllbGRWYWx1ZSxcclxuICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICBzZXBhcmF0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZFJlZ2V4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHN0ciArPSBgKD86JHtmaWVsZFJlZ2V4fSkke3JlcCAhPT0gdW5kZWZpbmVkID8gJycgOiAnPyd9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nKSB7XHJcbiAgICAgIC8vIElmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgYnV0IHRoZSBhY3R1YWwgdmFsdWUgaXMgZW1wdHkgb3Igb3RoZXJ3aXNlIGludmFsaWQsXHJcbiAgICAgIC8vIGRvbid0IHByb2Nlc3MgZnVydGhlci4gV2UgY2FuJ3QgdXNlIGBjb250aW51ZWAgaW4gdGhlIGFib3ZlIGJsb2NrIGJlY2F1c2UgdGhhdFxyXG4gICAgICAvLyB3b3VsZCBza2lwIHRoZSBlYXJseS1vdXQgYnJlYWsgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmaWVsZE5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciArPSBSZWdleGVzLm1heWJlQ2FwdHVyZShcclxuICAgICAgICAgIC8vIG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICAgICAgLy8gbWF5YmUgdGhpcyBmdW5jdGlvbiBuZWVkcyBhIHJlZmFjdG9yaW5nXHJcbiAgICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgICAgZmllbGROYW1lLFxyXG4gICAgICAgICAgZmllbGRWYWx1ZSxcclxuICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICkgK1xyXG4gICAgICAgICAgc2VwYXJhdG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ciArPSBkZWZhdWx0RmllbGRWYWx1ZSArIHNlcGFyYXRvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UncmUgbm90IGNhcHR1cmluZyBhbmQgZG9uJ3QgY2FyZSBhYm91dCBmdXR1cmUgZmllbGRzLlxyXG4gICAgaWYgKGtleSA+PSBtYXhLZXkpXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gUmVnZXhlcy5wYXJzZShzdHIpIGFzIENhY3Rib3RCYXNlUmVnRXhwPFQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkUmVnZXggPSA8VCBleHRlbmRzIGtleW9mIE5ldFBhcmFtcz4oXHJcbiAgdHlwZTogVCxcclxuICBwYXJhbXM/OiBQYXJzZUhlbHBlclR5cGU8VD4sXHJcbik6IENhY3Rib3RCYXNlUmVnRXhwPFQ+ID0+IHtcclxuICByZXR1cm4gcGFyc2VIZWxwZXIocGFyYW1zLCB0eXBlLCBkZWZhdWx0UGFyYW1zKHR5cGUsIE5ldFJlZ2V4ZXMubG9nVmVyc2lvbikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVnZXhlcyB7XHJcbiAgc3RhdGljIGxvZ1ZlcnNpb246IExvZ0RlZmluaXRpb25WZXJzaW9ucyA9ICdsYXRlc3QnO1xyXG5cclxuICBzdGF0aWMgZmxhZ1RyYW5zbGF0aW9uc05lZWRlZCA9IGZhbHNlO1xyXG4gIHN0YXRpYyBzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBOZXRSZWdleGVzLmZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgc3RhdGljIGRvZXNOZXRSZWdleE5lZWRUcmFuc2xhdGlvbihyZWdleDogUmVnRXhwIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyBOZWVkIHRvIGBzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkYCBiZWZvcmUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgY29uc29sZS5hc3NlcnQoTmV0UmVnZXhlcy5mbGFnVHJhbnNsYXRpb25zTmVlZGVkKTtcclxuICAgIGNvbnN0IHN0ciA9IHR5cGVvZiByZWdleCA9PT0gJ3N0cmluZycgPyByZWdleCA6IHJlZ2V4LnNvdXJjZTtcclxuICAgIHJldHVybiAhIW1hZ2ljU3RyaW5nUmVnZXguZXhlYyhzdHIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjAtMHgxNC1uZXR3b3Jrc3RhcnRzY2FzdGluZ1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGFydHNVc2luZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXJ0c1VzaW5nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3RhcnRzVXNpbmcnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhcnRzVXNpbmcnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eShwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIHBhcnNlSGVscGVyKHBhcmFtcywgJ0FiaWxpdHknLCB7XHJcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMoJ0FiaWxpdHknLCBOZXRSZWdleGVzLmxvZ1ZlcnNpb24pLFxyXG4gICAgICAvLyBPdmVycmlkZSB0eXBlXHJcbiAgICAgIDA6IHsgZmllbGQ6ICd0eXBlJywgdmFsdWU6ICcyWzEyXScsIG9wdGlvbmFsOiBmYWxzZSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMS0weDE1LW5ldHdvcmthYmlsaXR5XHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjItMHgxNi1uZXR3b3JrYW9lYWJpbGl0eVxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBhYmlsaXR5YCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlGdWxsKHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHknPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hYmlsaXR5KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNy0weDFiLW5ldHdvcmt0YXJnZXRpY29uLWhlYWQtbWFya2VyXHJcbiAgICovXHJcbiAgc3RhdGljIGhlYWRNYXJrZXIocGFyYW1zPzogTmV0UGFyYW1zWydIZWFkTWFya2VyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnSGVhZE1hcmtlcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdIZWFkTWFya2VyJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAzLTB4MDMtYWRkY29tYmF0YW50XHJcbiAgICovXHJcbiAgc3RhdGljIGFkZGVkQ29tYmF0YW50KHBhcmFtcz86IE5ldFBhcmFtc1snQWRkZWRDb21iYXRhbnQnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBwYXJzZUhlbHBlcihcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnQWRkZWRDb21iYXRhbnQnLFxyXG4gICAgICBkZWZhdWx0UGFyYW1zKCdBZGRlZENvbWJhdGFudCcsIE5ldFJlZ2V4ZXMubG9nVmVyc2lvbiksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDMtMHgwMy1hZGRjb21iYXRhbnRcclxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFkZGVkQ29tYmF0YW50YCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgc3RhdGljIGFkZGVkQ29tYmF0YW50RnVsbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWRkZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWRkZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5hZGRlZENvbWJhdGFudChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDQtMHgwNC1yZW1vdmVjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZpbmdDb21iYXRhbnQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1JlbW92ZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnUmVtb3ZlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdSZW1vdmVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2LTB4MWEtbmV0d29ya2J1ZmZcclxuICAgKi9cclxuICBzdGF0aWMgZ2FpbnNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydHYWluc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhaW5zRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0dhaW5zRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWZlciBnYWluc0VmZmVjdCBvdmVyIHRoaXMgZnVuY3Rpb24gdW5sZXNzIHlvdSByZWFsbHkgbmVlZCBleHRyYSBkYXRhLlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM4LTB4MjYtbmV0d29ya3N0YXR1c2VmZmVjdHNcclxuICAgKi9cclxuICBzdGF0aWMgc3RhdHVzRWZmZWN0RXhwbGljaXQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXR1c0VmZmVjdCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGF0dXNFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhdHVzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMwLTB4MWUtbmV0d29ya2J1ZmZyZW1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgbG9zZXNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydMb3Nlc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0xvc2VzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0xvc2VzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM1LTB4MjMtbmV0d29ya3RldGhlclxyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXRoZXIocGFyYW1zPzogTmV0UGFyYW1zWydUZXRoZXInXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdUZXRoZXInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnVGV0aGVyJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICd0YXJnZXQnIHdhcyBkZWZlYXRlZCBieSAnc291cmNlJ1xyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1LTB4MTktbmV0d29ya2RlYXRoXHJcbiAgICovXHJcbiAgc3RhdGljIHdhc0RlZmVhdGVkKHBhcmFtcz86IE5ldFBhcmFtc1snV2FzRGVmZWF0ZWQnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdXYXNEZWZlYXRlZCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdXYXNEZWZlYXRlZCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNC0weDE4LW5ldHdvcmtkb3RcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29ya0RvVChwYXJhbXM/OiBOZXRQYXJhbXNbJ05ldHdvcmtEb1QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOZXR3b3JrRG9UJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05ldHdvcmtEb1QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGVjaG8ocGFyYW1zPzogT21pdDxOZXRQYXJhbXNbJ0dhbWVMb2cnXSwgJ2NvZGUnPik6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ0VjaG8nLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE5ldFJlZ2V4ZXMuZ2FtZUxvZyh7IC4uLnBhcmFtcywgY29kZTogZ2FtZUxvZ0NvZGVzLmVjaG8gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZGlhbG9nKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdEaWFsb2cnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE5ldFJlZ2V4ZXMuZ2FtZUxvZyh7IC4uLnBhcmFtcywgY29kZTogZ2FtZUxvZ0NvZGVzLmRpYWxvZyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBtZXNzYWdlKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdNZXNzYWdlJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2coeyAuLi5wYXJhbXMsIGNvZGU6IGdhbWVMb2dDb2Rlcy5tZXNzYWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmllbGRzOiBjb2RlLCBuYW1lLCBsaW5lLCBjYXB0dXJlXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGdhbWVMb2cocGFyYW1zPzogTmV0UGFyYW1zWydHYW1lTG9nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdHYW1lTG9nJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTmFtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGFiaWxpdHkuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0xMi0weDBjLXBsYXllcnN0YXRzXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXRDaGFuZ2UocGFyYW1zPzogTmV0UGFyYW1zWydQbGF5ZXJTdGF0cyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1BsYXllclN0YXRzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1BsYXllclN0YXRzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAxLTB4MDEtY2hhbmdlem9uZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBjaGFuZ2Vab25lKHBhcmFtcz86IE5ldFBhcmFtc1snQ2hhbmdlWm9uZSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NoYW5nZVpvbmUnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ2hhbmdlWm9uZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zMy0weDIxLW5ldHdvcms2ZC1hY3Rvci1jb250cm9sXHJcbiAgICovXHJcbiAgc3RhdGljIG5ldHdvcms2ZChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2wnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzQtMHgyMi1uZXR3b3JrbmFtZXRvZ2dsZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBuYW1lVG9nZ2xlKHBhcmFtcz86IE5ldFBhcmFtc1snTmFtZVRvZ2dsZSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05hbWVUb2dnbGUnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTmFtZVRvZ2dsZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS00MC0weDI4LW1hcFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXAocGFyYW1zPzogTmV0UGFyYW1zWydNYXAnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdNYXAnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTWFwJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQxLTB4Mjktc3lzdGVtbG9nbWVzc2FnZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzeXN0ZW1Mb2dNZXNzYWdlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTeXN0ZW1Mb2dNZXNzYWdlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N5c3RlbUxvZ01lc3NhZ2UnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3lzdGVtTG9nTWVzc2FnZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNTctMHgxMDEtbWFwZWZmZWN0XHJcbiAgICovXHJcbiAgc3RhdGljIG1hcEVmZmVjdChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcEVmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcEVmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXBFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL3F1aXNxdW91cy9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU4LTB4MTAyLWZhdGVkaXJlY3RvclxyXG4gICAqL1xyXG4gIHN0YXRpYyBmYXRlRGlyZWN0b3IocGFyYW1zPzogTmV0UGFyYW1zWydGYXRlRGlyZWN0b3InXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdGYXRlRGlyZWN0b3InPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnRmF0ZURpcmVjdG9yJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1OS0weDEwMy1jZWRpcmVjdG9yXHJcbiAgICovXHJcbiAgc3RhdGljIGNlRGlyZWN0b3IocGFyYW1zPzogTmV0UGFyYW1zWydDRURpcmVjdG9yJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ0VEaXJlY3Rvcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDRURpcmVjdG9yJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlzcXVvdXMvY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MS0weDEwNS1jb21iYXRhbnRtZW1vcnlcclxuICAgKi9cclxuICBzdGF0aWMgY29tYmF0YW50TWVtb3J5KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb21iYXRhbnRNZW1vcnknXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29tYmF0YW50TWVtb3J5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbWJhdGFudE1lbW9yeScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjMtMHgxMDctc3RhcnRzdXNpbmdleHRyYVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGFydHNVc2luZ0V4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTdGFydHNVc2luZ0V4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXJ0c1VzaW5nRXh0cmEnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhcnRzVXNpbmdFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vcXVpc3F1b3VzL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjQtMHgxMDgtYWJpbGl0eWV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eUV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHlFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5RXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbk5ldFJlZ2V4ID0ge1xyXG4gIC8vIFRPRE8oNi4yKTogcmVtb3ZlIDQwMDAwMDEwIGFmdGVyIGV2ZXJ5Ym9keSBpcyBvbiA2LjIuXHJcbiAgLy8gVE9ETzogb3IgbWF5YmUga2VlcCBhcm91bmQgZm9yIHBsYXlpbmcgb2xkIGxvZyBmaWxlcz8/XHJcbiAgd2lwZTogTmV0UmVnZXhlcy5uZXR3b3JrNmQoeyBjb21tYW5kOiBbJzQwMDAwMDEwJywgJzQwMDAwMDBGJ10gfSksXHJcbiAgY2FjdGJvdFdpcGVFY2hvOiBOZXRSZWdleGVzLmVjaG8oeyBsaW5lOiAnY2FjdGJvdCB3aXBlLio/JyB9KSxcclxuICB1c2VyV2lwZUVjaG86IE5ldFJlZ2V4ZXMuZWNobyh7IGxpbmU6ICdlbmQnIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkTmV0UmVnZXhGb3JUcmlnZ2VyID0gPFQgZXh0ZW5kcyBrZXlvZiBOZXRQYXJhbXM+KFxyXG4gIHR5cGU6IFQsXHJcbiAgcGFyYW1zPzogTmV0UGFyYW1zW1RdLFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgaWYgKHR5cGUgPT09ICdBYmlsaXR5JylcclxuICAgIC8vIHRzIGNhbid0IG5hcnJvdyBUIHRvIGBBYmlsaXR5YCBoZXJlLCBuZWVkIGNhc3RpbmcuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5hYmlsaXR5KHBhcmFtcykgYXMgQ2FjdGJvdEJhc2VSZWdFeHA8VD47XHJcblxyXG4gIHJldHVybiBidWlsZFJlZ2V4PFQ+KHR5cGUsIHBhcmFtcyk7XHJcbn07XHJcbiIsIi8vIE92ZXJsYXlQbHVnaW4gQVBJIHNldHVwXHJcblxyXG5pbXBvcnQge1xyXG4gIEV2ZW50TWFwLFxyXG4gIEV2ZW50VHlwZSxcclxuICBJT3ZlcmxheUhhbmRsZXIsXHJcbiAgT3ZlcmxheUhhbmRsZXJGdW5jcyxcclxuICBPdmVybGF5SGFuZGxlclR5cGVzLFxyXG59IGZyb20gJy4uL3R5cGVzL2V2ZW50JztcclxuXHJcbnR5cGUgQmFzZVJlc3BvbnNlID0geyByc2VxPzogbnVtYmVyOyAnJGVycm9yJz86IGJvb2xlYW4gfTtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIF9fT3ZlcmxheUNhbGxiYWNrOiBFdmVudE1hcFtFdmVudFR5cGVdO1xyXG4gICAgZGlzcGF0Y2hPdmVybGF5RXZlbnQ/OiB0eXBlb2YgcHJvY2Vzc0V2ZW50O1xyXG4gICAgT3ZlcmxheVBsdWdpbkFwaToge1xyXG4gICAgICByZWFkeTogYm9vbGVhbjtcclxuICAgICAgY2FsbEhhbmRsZXI6IChtc2c6IHN0cmluZywgY2I/OiAodmFsdWU6IHN0cmluZykgPT4gdW5rbm93bikgPT4gdm9pZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKlxyXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gaW1wb3J0IGZyb20gdGhpcyBmaWxlOlxyXG4gICAgICpcclxuICAgICAqIGBpbXBvcnQgeyBhZGRPdmVybGF5TGlzdGVuZXIgfSBmcm9tICcvcGF0aC90by9vdmVybGF5X3BsdWdpbl9hcGknO2BcclxuICAgICAqL1xyXG4gICAgYWRkT3ZlcmxheUxpc3RlbmVyOiBJQWRkT3ZlcmxheUxpc3RlbmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxyXG4gICAgICpcclxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRvIGltcG9ydCBmcm9tIHRoaXMgZmlsZTpcclxuICAgICAqXHJcbiAgICAgKiBgaW1wb3J0IHsgcmVtb3ZlT3ZlcmxheUxpc3RlbmVyIH0gZnJvbSAnL3BhdGgvdG8vb3ZlcmxheV9wbHVnaW5fYXBpJztgXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZU92ZXJsYXlMaXN0ZW5lcjogSVJlbW92ZU92ZXJsYXlMaXN0ZW5lcjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBpcyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cclxuICAgICAqXHJcbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBpbXBvcnQgZnJvbSB0aGlzIGZpbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGltcG9ydCB7IGNhbGxPdmVybGF5SGFuZGxlciB9IGZyb20gJy9wYXRoL3RvL292ZXJsYXlfcGx1Z2luX2FwaSc7YFxyXG4gICAgICovXHJcbiAgICBjYWxsT3ZlcmxheUhhbmRsZXI6IElPdmVybGF5SGFuZGxlcjtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgSUFkZE92ZXJsYXlMaXN0ZW5lciA9IDxUIGV4dGVuZHMgRXZlbnRUeXBlPihldmVudDogVCwgY2I6IEV2ZW50TWFwW1RdKSA9PiB2b2lkO1xyXG50eXBlIElSZW1vdmVPdmVybGF5TGlzdGVuZXIgPSA8VCBleHRlbmRzIEV2ZW50VHlwZT4oZXZlbnQ6IFQsIGNiOiBFdmVudE1hcFtUXSkgPT4gdm9pZDtcclxuXHJcbnR5cGUgU3Vic2NyaWJlcjxUPiA9IHtcclxuICBba2V5IGluIEV2ZW50VHlwZV0/OiBUW107XHJcbn07XHJcbnR5cGUgRXZlbnRQYXJhbWV0ZXIgPSBQYXJhbWV0ZXJzPEV2ZW50TWFwW0V2ZW50VHlwZV0+WzBdO1xyXG50eXBlIFZvaWRGdW5jPFQ+ID0gKC4uLmFyZ3M6IFRbXSkgPT4gdm9pZDtcclxuXHJcbmxldCBpbml0ZWQgPSBmYWxzZTtcclxuXHJcbmxldCB3c1VybDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbmxldCB3czogV2ViU29ja2V0IHwgbnVsbCA9IG51bGw7XHJcbmxldCBxdWV1ZTogKFxyXG4gIHwgeyBbczogc3RyaW5nXTogdW5rbm93biB9XHJcbiAgfCBbeyBbczogc3RyaW5nXTogdW5rbm93biB9LCAoKHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB1bmtub3duKSB8IHVuZGVmaW5lZF1cclxuKVtdIHwgbnVsbCA9IFtdO1xyXG5sZXQgcnNlcUNvdW50ZXIgPSAwO1xyXG50eXBlIFByb21pc2VGdW5jcyA9IHtcclxuICByZXNvbHZlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XHJcbiAgcmVqZWN0OiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XHJcbn07XHJcbmNvbnN0IHJlc3BvbnNlUHJvbWlzZXM6IHsgW3JzZXFJZHg6IG51bWJlcl06IFByb21pc2VGdW5jcyB9ID0ge307XHJcblxyXG5jb25zdCBzdWJzY3JpYmVyczogU3Vic2NyaWJlcjxWb2lkRnVuYzx1bmtub3duPj4gPSB7fTtcclxuXHJcbmNvbnN0IHNlbmRNZXNzYWdlID0gKFxyXG4gIG1zZzogeyBbczogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gIGNiPzogKHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB1bmtub3duLFxyXG4pOiB2b2lkID0+IHtcclxuICBpZiAod3MpIHtcclxuICAgIGlmIChxdWV1ZSlcclxuICAgICAgcXVldWUucHVzaChtc2cpO1xyXG4gICAgZWxzZVxyXG4gICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocXVldWUpXHJcbiAgICAgIHF1ZXVlLnB1c2goW21zZywgY2JdKTtcclxuICAgIGVsc2VcclxuICAgICAgd2luZG93Lk92ZXJsYXlQbHVnaW5BcGkuY2FsbEhhbmRsZXIoSlNPTi5zdHJpbmdpZnkobXNnKSwgY2IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHByb2Nlc3NFdmVudCA9IDxUIGV4dGVuZHMgRXZlbnRUeXBlPihtc2c6IFBhcmFtZXRlcnM8RXZlbnRNYXBbVF0+WzBdKTogdm9pZCA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICBjb25zdCBzdWJzID0gc3Vic2NyaWJlcnNbbXNnLnR5cGVdO1xyXG4gIHN1YnM/LmZvckVhY2goKHN1YikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3ViKG1zZyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGF0Y2hPdmVybGF5RXZlbnQgPSBwcm9jZXNzRXZlbnQ7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkT3ZlcmxheUxpc3RlbmVyOiBJQWRkT3ZlcmxheUxpc3RlbmVyID0gKGV2ZW50LCBjYik6IHZvaWQgPT4ge1xyXG4gIGluaXQoKTtcclxuXHJcbiAgaWYgKCFzdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgIHN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIGlmICghcXVldWUpIHtcclxuICAgICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgIGNhbGw6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgIGV2ZW50czogW2V2ZW50XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVyc1tldmVudF0/LnB1c2goY2IgYXMgVm9pZEZ1bmM8dW5rbm93bj4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU92ZXJsYXlMaXN0ZW5lcjogSVJlbW92ZU92ZXJsYXlMaXN0ZW5lciA9IChldmVudCwgY2IpOiB2b2lkID0+IHtcclxuICBpbml0KCk7XHJcblxyXG4gIGlmIChzdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgIGNvbnN0IGxpc3QgPSBzdWJzY3JpYmVyc1tldmVudF07XHJcbiAgICBjb25zdCBwb3MgPSBsaXN0Py5pbmRleE9mKGNiIGFzIFZvaWRGdW5jPHVua25vd24+KTtcclxuXHJcbiAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgcG9zID4gLTEpXHJcbiAgICAgIGxpc3Q/LnNwbGljZShwb3MsIDEpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNhbGxPdmVybGF5SGFuZGxlckludGVybmFsOiBJT3ZlcmxheUhhbmRsZXIgPSAoXHJcbiAgX21zZzogeyBbczogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICBjb25zdCBtc2cgPSB7XHJcbiAgICAuLi5fbXNnLFxyXG4gICAgcnNlcTogMCxcclxuICB9O1xyXG4gIGxldCBwOiBQcm9taXNlPHVua25vd24+O1xyXG5cclxuICBpZiAod3MpIHtcclxuICAgIG1zZy5yc2VxID0gcnNlcUNvdW50ZXIrKztcclxuICAgIHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc3BvbnNlUHJvbWlzZXNbbXNnLnJzZXFdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VuZE1lc3NhZ2UobXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2VuZE1lc3NhZ2UobXNnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEpIGFzIEJhc2VSZXNwb25zZTtcclxuICAgICAgICBpZiAocGFyc2VkWyckZXJyb3InXSlcclxuICAgICAgICAgIHJlamVjdChwYXJzZWQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJlc29sdmUocGFyc2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxudHlwZSBPdmVycmlkZU1hcCA9IHsgW2NhbGwgaW4gT3ZlcmxheUhhbmRsZXJUeXBlc10/OiBPdmVybGF5SGFuZGxlckZ1bmNzW2NhbGxdIH07XHJcbmNvbnN0IGNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwOiBPdmVycmlkZU1hcCA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGxPdmVybGF5SGFuZGxlcjogSU92ZXJsYXlIYW5kbGVyID0gKFxyXG4gIF9tc2c6IHsgW3M6IHN0cmluZ106IHVua25vd24gfSxcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4pOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gIGluaXQoKTtcclxuXHJcbiAgLy8gSWYgdGhpcyBgYXNgIGlzIGluY29ycmVjdCwgdGhlbiBpdCB3aWxsIG5vdCBmaW5kIGFuIG92ZXJyaWRlLlxyXG4gIC8vIFRPRE86IHdlIGNvdWxkIGFsc28gcmVwbGFjZSB0aGlzIHdpdGggYSB0eXBlIGd1YXJkLlxyXG4gIGNvbnN0IHR5cGUgPSBfbXNnLmNhbGwgYXMga2V5b2YgT3ZlcnJpZGVNYXA7XHJcbiAgY29uc3QgY2FsbEZ1bmMgPSBjYWxsT3ZlcmxheUhhbmRsZXJPdmVycmlkZU1hcFt0eXBlXSA/PyBjYWxsT3ZlcmxheUhhbmRsZXJJbnRlcm5hbDtcclxuXHJcbiAgLy8gVGhlIGBJT3ZlcmxheUhhbmRsZXJgIHR5cGUgZ3VhcmFudGVlcyB0aGF0IHBhcmFtZXRlcnMvcmV0dXJuIHR5cGUgbWF0Y2hcclxuICAvLyBvbmUgb2YgdGhlIG92ZXJsYXkgaGFuZGxlcnMuICBUaGUgT3ZlcnJpZGVNYXAgYWxzbyBvbmx5IHN0b3JlcyBmdW5jdGlvbnNcclxuICAvLyB0aGF0IG1hdGNoIGJ5IHRoZSBkaXNjcmltaW5hdGluZyBgY2FsbGAgZmllbGQsIGFuZCBzbyBhbnkgb3ZlcnJpZGVzXHJcbiAgLy8gc2hvdWxkIGJlIGNvcnJlY3QgaGVyZS5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcclxuICByZXR1cm4gY2FsbEZ1bmMoX21zZyBhcyBhbnkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGUgPSA8VCBleHRlbmRzIGtleW9mIE92ZXJsYXlIYW5kbGVyRnVuY3M+KFxyXG4gIHR5cGU6IFQsXHJcbiAgb3ZlcnJpZGU/OiBPdmVybGF5SGFuZGxlckZ1bmNzW1RdLFxyXG4pOiB2b2lkID0+IHtcclxuICBpZiAoIW92ZXJyaWRlKSB7XHJcbiAgICBkZWxldGUgY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXBbdHlwZV07XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwW3R5cGVdID0gb3ZlcnJpZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdCA9ICgpOiB2b2lkID0+IHtcclxuICBpZiAoaW5pdGVkKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdzVXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ09WRVJMQVlfV1MnKTtcclxuICAgIGlmICh3c1VybCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBjb25uZWN0V3MgPSBmdW5jdGlvbih3c1VybDogc3RyaW5nKSB7XHJcbiAgICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHdzVXJsKTtcclxuXHJcbiAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQhJyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcSA9IHF1ZXVlID8/IFtdO1xyXG4gICAgICAgICAgcXVldWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgIHNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgY2FsbDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGV2ZW50czogT2JqZWN0LmtleXMoc3Vic2NyaWJlcnMpLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgcSkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNnKSlcclxuICAgICAgICAgICAgICBzZW5kTWVzc2FnZShtc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKF9tc2cpID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX21zZy5kYXRhICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgbWVzc2FnZSBkYXRhIHJlY2VpdmVkOiAnLCBfbXNnKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbXNnID0gSlNPTi5wYXJzZShfbXNnLmRhdGEpIGFzIEV2ZW50UGFyYW1ldGVyICYgQmFzZVJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZUZ1bmNzID0gbXNnPy5yc2VxICE9PSB1bmRlZmluZWQgPyByZXNwb25zZVByb21pc2VzW21zZy5yc2VxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKG1zZy5yc2VxICE9PSB1bmRlZmluZWQgJiYgcHJvbWlzZUZ1bmNzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG1zZ1snJGVycm9yJ10pXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlRnVuY3MucmVqZWN0KG1zZyk7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZUZ1bmNzLnJlc29sdmUobXNnKTtcclxuICAgICAgICAgICAgICBkZWxldGUgcmVzcG9uc2VQcm9taXNlc1ttc2cucnNlcV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0V2ZW50KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkOiAnLCBfbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgIHF1ZXVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVHJ5aW5nIHRvIHJlY29ubmVjdC4uLicpO1xyXG4gICAgICAgICAgLy8gRG9uJ3Qgc3BhbSB0aGUgc2VydmVyIHdpdGggcmV0cmllcy5cclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29ubmVjdFdzKHdzVXJsKTtcclxuICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25uZWN0V3Mod3NVcmwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgd2FpdEZvckFwaSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghd2luZG93Lk92ZXJsYXlQbHVnaW5BcGk/LnJlYWR5KSB7XHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3YWl0Rm9yQXBpLCAzMDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcSA9IHF1ZXVlID8/IFtdO1xyXG4gICAgICAgIHF1ZXVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgd2luZG93Ll9fT3ZlcmxheUNhbGxiYWNrID0gcHJvY2Vzc0V2ZW50O1xyXG5cclxuICAgICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICBjYWxsOiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgIGV2ZW50czogT2JqZWN0LmtleXMoc3Vic2NyaWJlcnMpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcSkge1xyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpXHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKGl0ZW1bMF0sIGl0ZW1bMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdhaXRGb3JBcGkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZXJlIHRoZSBPdmVybGF5UGx1Z2luIEFQSSBpcyByZWdpc3RlcmVkIHRvIHRoZSB3aW5kb3cgb2JqZWN0LFxyXG4gICAgLy8gYnV0IHRoaXMgaXMgbWFpbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5Gb3IgY2FjdGJvdCdzIGJ1aWx0LWluIGZpbGVzLFxyXG4gICAgLy8gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSB2YXJpb3VzIGZ1bmN0aW9ucyBleHBvcnRlZCBpbiByZXNvdXJjZXMvb3ZlcmxheV9wbHVnaW5fYXBpLnRzLlxyXG4gICAgd2luZG93LmFkZE92ZXJsYXlMaXN0ZW5lciA9IGFkZE92ZXJsYXlMaXN0ZW5lcjtcclxuICAgIHdpbmRvdy5yZW1vdmVPdmVybGF5TGlzdGVuZXIgPSByZW1vdmVPdmVybGF5TGlzdGVuZXI7XHJcbiAgICB3aW5kb3cuY2FsbE92ZXJsYXlIYW5kbGVyID0gY2FsbE92ZXJsYXlIYW5kbGVyO1xyXG4gICAgd2luZG93LmRpc3BhdGNoT3ZlcmxheUV2ZW50ID0gZGlzcGF0Y2hPdmVybGF5RXZlbnQ7XHJcbiAgfVxyXG5cclxuICBpbml0ZWQgPSB0cnVlO1xyXG59O1xyXG4iLCJpbXBvcnQgTmV0UmVnZXhlcyBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbmV0cmVnZXhlcyc7XHJcbmltcG9ydCB7IGFkZE92ZXJsYXlMaXN0ZW5lciwgY2FsbE92ZXJsYXlIYW5kbGVyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL292ZXJsYXlfcGx1Z2luX2FwaSc7XHJcblxyXG5pbXBvcnQgJy4uLy4uL3Jlc291cmNlcy9kZWZhdWx0cy5jc3MnO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdDaGFuZ2Vab25lJywgKGUpID0+IHtcclxuICBjb25zdCBjdXJyZW50Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Wm9uZScpO1xyXG4gIGlmIChjdXJyZW50Wm9uZSlcclxuICAgIGN1cnJlbnRab25lLmlubmVyVGV4dCA9IGBjdXJyZW50Wm9uZTogJHtlLnpvbmVOYW1lfSAoJHtlLnpvbmVJRH0pYDtcclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uSW5Db21iYXRDaGFuZ2VkRXZlbnQnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGluQ29tYmF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luQ29tYmF0Jyk7XHJcbiAgaWYgKGluQ29tYmF0KSB7XHJcbiAgICBpbkNvbWJhdC5pbm5lclRleHQgPSBgaW5Db21iYXQ6IGFjdDogJHtlLmRldGFpbC5pbkFDVENvbWJhdCA/ICd5ZXMnIDogJ25vJ30gZ2FtZTogJHtcclxuICAgICAgZS5kZXRhaWwuaW5HYW1lQ29tYmF0ID8gJ3llcycgOiAnbm8nXHJcbiAgICB9YDtcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvblBsYXllckNoYW5nZWRFdmVudCcsIChlKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgaWYgKG5hbWUpXHJcbiAgICBuYW1lLmlubmVyVGV4dCA9IGUuZGV0YWlsLm5hbWU7XHJcbiAgY29uc3QgcGxheWVySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVySWQnKTtcclxuICBpZiAocGxheWVySWQpXHJcbiAgICBwbGF5ZXJJZC5pbm5lclRleHQgPSBlLmRldGFpbC5pZC50b1N0cmluZygxNik7XHJcbiAgY29uc3QgaHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHAnKTtcclxuICBpZiAoaHApXHJcbiAgICBocC5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5jdXJyZW50SFB9LyR7ZS5kZXRhaWwubWF4SFB9ICgke2UuZGV0YWlsLmN1cnJlbnRTaGllbGR9KWA7XHJcbiAgY29uc3QgbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXAnKTtcclxuICBpZiAobXApXHJcbiAgICBtcC5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5jdXJyZW50TVB9LyR7ZS5kZXRhaWwubWF4TVB9YDtcclxuICBjb25zdCBjcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcCcpO1xyXG4gIGlmIChjcClcclxuICAgIGNwLmlubmVyVGV4dCA9IGAke2UuZGV0YWlsLmN1cnJlbnRDUH0vJHtlLmRldGFpbC5tYXhDUH1gO1xyXG4gIGNvbnN0IGdwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dwJyk7XHJcbiAgaWYgKGdwKVxyXG4gICAgZ3AuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwuY3VycmVudEdQfS8ke2UuZGV0YWlsLm1heEdQfWA7XHJcbiAgY29uc3Qgam9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvYicpO1xyXG4gIGlmIChqb2IpXHJcbiAgICBqb2IuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwubGV2ZWx9ICR7ZS5kZXRhaWwuam9ifWA7XHJcbiAgY29uc3QgZGVidWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKTtcclxuICBpZiAoZGVidWcpXHJcbiAgICBkZWJ1Zy5pbm5lclRleHQgPSBlLmRldGFpbC5kZWJ1Z0pvYjtcclxuXHJcbiAgY29uc3Qgam9iSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2JpbmZvJyk7XHJcbiAgaWYgKGpvYkluZm8pIHtcclxuICAgIGNvbnN0IGRldGFpbCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKGRldGFpbC5qb2IgPT09ICdSRE0nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwud2hpdGVNYW5hfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5ibGFja01hbmF9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm1hbmFTdGFja3N9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1dBUicgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGRldGFpbC5qb2JEZXRhaWwuYmVhc3QudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0RSSycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5ibG9vZH0gfCAke2RldGFpbC5qb2JEZXRhaWwuZGFya3NpZGVNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmRhcmtBcnRzLnRvU3RyaW5nKCl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxpdmluZ1NoYWRvd01pbGxpc2Vjb25kc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnR05CJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gYCR7ZGV0YWlsLmpvYkRldGFpbC5jYXJ0cmlkZ2VzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5jb250aW51YXRpb25TdGF0ZX1gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnUExEJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gZGV0YWlsLmpvYkRldGFpbC5vYXRoLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdCUkQnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuc29uZ05hbWV9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxhc3RQbGF5ZWR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnNvbmdQcm9jc30gfCAke2RldGFpbC5qb2JEZXRhaWwuc291bEdhdWdlfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb25nTWlsbGlzZWNvbmRzfSB8IFske1xyXG4gICAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5jb2RhLmpvaW4oJywgJylcclxuICAgICAgICB9XWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdETkMnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmZlYXRoZXJzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5lc3ByaXR9IHwgWyR7XHJcbiAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5zdGVwcy5qb2luKCcsICcpXHJcbiAgICAgIH1dIHwgJHtkZXRhaWwuam9iRGV0YWlsLmN1cnJlbnRTdGVwfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdOSU4nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmh1dG9uTWlsbGlzZWNvbmRzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5uaW5raUFtb3VudH1gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnRFJHJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmJsb29kTWlsbGlzZWNvbmRzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5saWZlTWlsbGlzZWNvbmRzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5leWVzQW1vdW50fSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5maXJzdG1pbmRzRm9jdXN9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0JMTScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxTdGFja3N9ICgke2RldGFpbC5qb2JEZXRhaWwudW1icmFsTWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwudW1icmFsSGVhcnRzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5wb2x5Z2xvdH0gJHtkZXRhaWwuam9iRGV0YWlsLmVub2NoaWFuLnRvU3RyaW5nKCl9ICgke2RldGFpbC5qb2JEZXRhaWwubmV4dFBvbHlnbG90TWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwucGFyYWRveC50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdUSE0nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwudW1icmFsU3RhY2tzfSAoJHtkZXRhaWwuam9iRGV0YWlsLnVtYnJhbE1pbGxpc2Vjb25kc30pYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1dITScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5saWx5U3RhY2tzfSAoJHtkZXRhaWwuam9iRGV0YWlsLmxpbHlNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5ibG9vZGxpbHlTdGFja3N9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NNTicgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5hZXRoZXJmbG93U3RhY2tzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC50cmFuY2VNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmF0dHVuZW1lbnR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmF0dHVuZW1lbnRNaWxsaXNlY29uZHN9IHwgJHtcclxuICAgICAgICAgIGRldGFpbFxyXG4gICAgICAgICAgICAuam9iRGV0YWlsLmFjdGl2ZVByaW1hbCA/PyAnLSdcclxuICAgICAgICB9IHwgWyR7ZGV0YWlsLmpvYkRldGFpbC51c2FibGVBcmNhbnVtLmpvaW4oJywgJyl9XSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5uZXh0U3VtbW9uZWR9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NDSCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5hZXRoZXJmbG93U3RhY2tzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5mYWlyeUdhdWdlfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5mYWlyeVN0YXR1c30gKCR7ZGV0YWlsLmpvYkRldGFpbC5mYWlyeU1pbGxpc2Vjb25kc30pYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0FDTicgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGRldGFpbC5qb2JEZXRhaWwuYWV0aGVyZmxvd1N0YWNrcy50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnQVNUJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gYCR7ZGV0YWlsLmpvYkRldGFpbC5oZWxkQ2FyZH0gfCAke2RldGFpbC5qb2JEZXRhaWwuY3Jvd25DYXJkfSB8IFske1xyXG4gICAgICAgIGRldGFpbC5qb2JEZXRhaWwuYXJjYW51bXMuam9pbignLCAnKVxyXG4gICAgICB9XWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdNTksnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuY2hha3JhU3RhY2tzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5sdW5hck5hZGkudG9TdHJpbmcoKX0gfCAke2RldGFpbC5qb2JEZXRhaWwuc29sYXJOYWRpLnRvU3RyaW5nKCl9IHwgWyR7XHJcbiAgICAgICAgICBkZXRhaWwuam9iRGV0YWlsLmJlYXN0Q2hha3JhLmpvaW4oJywgJylcclxuICAgICAgICB9XWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdNQ0gnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuaGVhdH0gKCR7ZGV0YWlsLmpvYkRldGFpbC5vdmVyaGVhdE1pbGxpc2Vjb25kc30pIHwgJHtkZXRhaWwuam9iRGV0YWlsLmJhdHRlcnl9ICgke2RldGFpbC5qb2JEZXRhaWwuYmF0dGVyeU1pbGxpc2Vjb25kc30pIHwgbGFzdDogJHtkZXRhaWwuam9iRGV0YWlsLmxhc3RCYXR0ZXJ5QW1vdW50fSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5vdmVyaGVhdEFjdGl2ZS50b1N0cmluZygpfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5yb2JvdEFjdGl2ZS50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdTQU0nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwua2Vua2l9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm1lZGl0YXRpb25TdGFja3N9KCR7ZGV0YWlsLmpvYkRldGFpbC5zZXRzdS50b1N0cmluZygpfSwke2RldGFpbC5qb2JEZXRhaWwuZ2V0c3UudG9TdHJpbmcoKX0sJHtkZXRhaWwuam9iRGV0YWlsLmthLnRvU3RyaW5nKCl9KWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdTR0UnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuYWRkZXJzZ2FsbH0gKCR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnNnYWxsTWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwuYWRkZXJzdGluZ30gfCAke2RldGFpbC5qb2JEZXRhaWwuZXVrcmFzaWEudG9TdHJpbmcoKX1gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnUlBSJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLnNvdWx9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnNocm91ZH0gfCAke2RldGFpbC5qb2JEZXRhaWwuZW5zaHJvdWRNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxlbXVyZVNocm91ZH0gfCAke2RldGFpbC5qb2JEZXRhaWwudm9pZFNocm91ZH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3MnKTtcclxuICBpZiAocG9zKSB7XHJcbiAgICBwb3MuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwucG9zLngudG9GaXhlZCgyKX0sJHtlLmRldGFpbC5wb3MueS50b0ZpeGVkKDIpfSwke1xyXG4gICAgICBlLmRldGFpbC5wb3Muei50b0ZpeGVkKDIpXHJcbiAgICB9YDtcclxuICB9XHJcbiAgY29uc3Qgcm90YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24nKTtcclxuICBpZiAocm90YXRpb24pXHJcbiAgICByb3RhdGlvbi5pbm5lclRleHQgPSBlLmRldGFpbC5yb3RhdGlvbi50b1N0cmluZygpO1xyXG4gIGNvbnN0IGJhaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFpdCcpO1xyXG4gIGlmIChiYWl0KVxyXG4gICAgYmFpdC5pbm5lclRleHQgPSBlLmRldGFpbC5iYWl0LnRvU3RyaW5nKCk7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdFbm1pdHlUYXJnZXREYXRhJywgKGUpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0Jyk7XHJcbiAgaWYgKHRhcmdldClcclxuICAgIHRhcmdldC5pbm5lclRleHQgPSBlLlRhcmdldCA/IGUuVGFyZ2V0Lk5hbWUgOiAnLS0nO1xyXG4gIGNvbnN0IHRpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWQnKTtcclxuICBpZiAodGlkKVxyXG4gICAgdGlkLmlubmVyVGV4dCA9IGUuVGFyZ2V0ID8gZS5UYXJnZXQuSUQudG9TdHJpbmcoMTYpIDogJyc7XHJcbiAgY29uc3QgdGRpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkaXN0YW5jZScpO1xyXG4gIGlmICh0ZGlzdGFuY2UpXHJcbiAgICB0ZGlzdGFuY2UuaW5uZXJUZXh0ID0gZS5UYXJnZXQgPyBlLlRhcmdldC5EaXN0YW5jZS50b1N0cmluZygpIDogJyc7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvbkdhbWVFeGlzdHNFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBleGlzdHM6IFwiICsgZS5kZXRhaWwuZXhpc3RzKTtcclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uR2FtZUFjdGl2ZUNoYW5nZWRFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBhY3RpdmU6IFwiICsgZS5kZXRhaWwuYWN0aXZlKTtcclxufSk7XHJcblxyXG5jb25zdCB0dHNFY2hvUmVnZXggPSBOZXRSZWdleGVzLmVjaG8oeyBsaW5lOiAndHRzOi4qPycgfSk7XHJcbmFkZE92ZXJsYXlMaXN0ZW5lcignTG9nTGluZScsIChlKSA9PiB7XHJcbiAgLy8gTWF0Y2ggXCIvZWNobyB0dHM6PHN0dWZmPlwiXHJcbiAgY29uc3QgbGluZSA9IHR0c0VjaG9SZWdleC5leGVjKGUucmF3TGluZSk/Lmdyb3Vwcz8ubGluZTtcclxuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IGNvbG9uID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgaWYgKGNvbG9uID09PSAtMSlcclxuICAgIHJldHVybjtcclxuICBjb25zdCB0ZXh0ID0gbGluZS5zbGljZShjb2xvbik7XHJcbiAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdm9pZCBjYWxsT3ZlcmxheUhhbmRsZXIoe1xyXG4gICAgICBjYWxsOiAnY2FjdGJvdFNheScsXHJcbiAgICAgIHRleHQ6IHRleHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvblVzZXJGaWxlQ2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFVzZXIgZmlsZSAke2UuZmlsZX0gY2hhbmdlZCFgKTtcclxufSk7XHJcblxyXG52b2lkIGNhbGxPdmVybGF5SGFuZGxlcih7IGNhbGw6ICdjYWN0Ym90UmVxdWVzdFN0YXRlJyB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJhdGFudE1lbW9yeUtleXMiLCJsYXRlc3RMb2dEZWZpbml0aW9ucyIsIkdhbWVMb2ciLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIm1lc3NhZ2VUeXBlIiwiZmllbGRzIiwidGltZXN0YW1wIiwiY29kZSIsImxpbmUiLCJzdWJGaWVsZHMiLCJjYW5Bbm9ueW1pemUiLCJmaXJzdE9wdGlvbmFsRmllbGQiLCJ1bmRlZmluZWQiLCJDaGFuZ2Vab25lIiwiaWQiLCJsYXN0SW5jbHVkZSIsIkNoYW5nZWRQbGF5ZXIiLCJwbGF5ZXJJZHMiLCJBZGRlZENvbWJhdGFudCIsImpvYiIsImxldmVsIiwib3duZXJJZCIsIndvcmxkSWQiLCJ3b3JsZCIsIm5wY05hbWVJZCIsIm5wY0Jhc2VJZCIsImN1cnJlbnRIcCIsImhwIiwiY3VycmVudE1wIiwibXAiLCJ4IiwieSIsInoiLCJoZWFkaW5nIiwiUmVtb3ZlZENvbWJhdGFudCIsIm93bmVyIiwiUGFydHlMaXN0IiwicGFydHlDb3VudCIsImlkMCIsImlkMSIsImlkMiIsImlkMyIsImlkNCIsImlkNSIsImlkNiIsImlkNyIsImlkOCIsImlkOSIsImlkMTAiLCJpZDExIiwiaWQxMiIsImlkMTMiLCJpZDE0IiwiaWQxNSIsImlkMTYiLCJpZDE3IiwiaWQxOCIsImlkMTkiLCJpZDIwIiwiaWQyMSIsImlkMjIiLCJpZDIzIiwiUGxheWVyU3RhdHMiLCJzdHJlbmd0aCIsImRleHRlcml0eSIsInZpdGFsaXR5IiwiaW50ZWxsaWdlbmNlIiwibWluZCIsInBpZXR5IiwiYXR0YWNrUG93ZXIiLCJkaXJlY3RIaXQiLCJjcml0aWNhbEhpdCIsImF0dGFja01hZ2ljUG90ZW5jeSIsImhlYWxNYWdpY1BvdGVuY3kiLCJkZXRlcm1pbmF0aW9uIiwic2tpbGxTcGVlZCIsInNwZWxsU3BlZWQiLCJ0ZW5hY2l0eSIsImxvY2FsQ29udGVudElkIiwiU3RhcnRzVXNpbmciLCJzb3VyY2VJZCIsImFiaWxpdHkiLCJ0YXJnZXRJZCIsInRhcmdldCIsImNhc3RUaW1lIiwicG9zc2libGVSc3ZGaWVsZHMiLCJibGFua0ZpZWxkcyIsIkFiaWxpdHkiLCJmbGFncyIsImRhbWFnZSIsInRhcmdldEN1cnJlbnRIcCIsInRhcmdldE1heEhwIiwidGFyZ2V0Q3VycmVudE1wIiwidGFyZ2V0TWF4TXAiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInRhcmdldFoiLCJ0YXJnZXRIZWFkaW5nIiwibWF4SHAiLCJtYXhNcCIsInNlcXVlbmNlIiwidGFyZ2V0SW5kZXgiLCJ0YXJnZXRDb3VudCIsIk5ldHdvcmtBT0VBYmlsaXR5IiwiTmV0d29ya0NhbmNlbEFiaWxpdHkiLCJyZWFzb24iLCJOZXR3b3JrRG9UIiwid2hpY2giLCJlZmZlY3RJZCIsImRhbWFnZVR5cGUiLCJzb3VyY2VDdXJyZW50SHAiLCJzb3VyY2VNYXhIcCIsInNvdXJjZUN1cnJlbnRNcCIsInNvdXJjZU1heE1wIiwic291cmNlWCIsInNvdXJjZVkiLCJzb3VyY2VaIiwic291cmNlSGVhZGluZyIsIldhc0RlZmVhdGVkIiwiR2FpbnNFZmZlY3QiLCJlZmZlY3QiLCJkdXJhdGlvbiIsImNvdW50IiwiSGVhZE1hcmtlciIsIk5ldHdvcmtSYWlkTWFya2VyIiwib3BlcmF0aW9uIiwid2F5bWFyayIsIk5ldHdvcmtUYXJnZXRNYXJrZXIiLCJ0YXJnZXROYW1lIiwiTG9zZXNFZmZlY3QiLCJOZXR3b3JrR2F1Z2UiLCJkYXRhMCIsImRhdGExIiwiZGF0YTIiLCJkYXRhMyIsImZpcnN0VW5rbm93bkZpZWxkIiwiTmV0d29ya1dvcmxkIiwiaXNVbmtub3duIiwiQWN0b3JDb250cm9sIiwiaW5zdGFuY2UiLCJjb21tYW5kIiwiTmFtZVRvZ2dsZSIsInRvZ2dsZSIsIlRldGhlciIsIkxpbWl0QnJlYWsiLCJ2YWx1ZUhleCIsImJhcnMiLCJOZXR3b3JrRWZmZWN0UmVzdWx0Iiwic2VxdWVuY2VJZCIsImN1cnJlbnRTaGllbGQiLCJTdGF0dXNFZmZlY3QiLCJqb2JMZXZlbERhdGEiLCJkYXRhNCIsImRhdGE1IiwiTmV0d29ya1VwZGF0ZUhQIiwiTWFwIiwicmVnaW9uTmFtZSIsInBsYWNlTmFtZSIsInBsYWNlTmFtZVN1YiIsIlN5c3RlbUxvZ01lc3NhZ2UiLCJwYXJhbTAiLCJwYXJhbTEiLCJwYXJhbTIiLCJTdGF0dXNMaXN0MyIsIlBhcnNlckluZm8iLCJnbG9iYWxJbmNsdWRlIiwiUHJvY2Vzc0luZm8iLCJEZWJ1ZyIsIlBhY2tldER1bXAiLCJWZXJzaW9uIiwiRXJyb3IiLCJOb25lIiwiTGluZVJlZ2lzdHJhdGlvbiIsInZlcnNpb24iLCJNYXBFZmZlY3QiLCJsb2NhdGlvbiIsIkZhdGVEaXJlY3RvciIsImNhdGVnb3J5IiwiZmF0ZUlkIiwicHJvZ3Jlc3MiLCJDRURpcmVjdG9yIiwicG9wVGltZSIsInRpbWVSZW1haW5pbmciLCJjZUtleSIsIm51bVBsYXllcnMiLCJzdGF0dXMiLCJJbkNvbWJhdCIsImluQUNUQ29tYmF0IiwiaW5HYW1lQ29tYmF0IiwiaXNBQ1RDaGFuZ2VkIiwiaXNHYW1lQ2hhbmdlZCIsIkNvbWJhdGFudE1lbW9yeSIsImNoYW5nZSIsInJlcGVhdGluZ0ZpZWxkcyIsInN0YXJ0aW5nSW5kZXgiLCJsYWJlbCIsIm5hbWVzIiwic29ydEtleXMiLCJwcmltYXJ5S2V5IiwicG9zc2libGVLZXlzIiwiUlNWRGF0YSIsImxvY2FsZSIsImtleSIsInZhbHVlIiwiU3RhcnRzVXNpbmdFeHRyYSIsIkFiaWxpdHlFeHRyYSIsImdsb2JhbEVmZmVjdENvdW50ZXIiLCJkYXRhRmxhZyIsImxvZ0RlZmluaXRpb25zVmVyc2lvbnMiLCJhc3NlcnRMb2dEZWZpbml0aW9ucyIsImNvbnNvbGUiLCJhc3NlcnQiLCJVbnJlYWNoYWJsZUNvZGUiLCJjb25zdHJ1Y3RvciIsImxvZ0RlZmluaXRpb25zIiwic2VwYXJhdG9yIiwibWF0Y2hEZWZhdWx0IiwibWF0Y2hXaXRoQ29sb25zRGVmYXVsdCIsImZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMiLCJkZWZhdWx0UGFyYW1zIiwiaW5jbHVkZSIsImxvZ1R5cGUiLCJPYmplY3QiLCJrZXlzIiwicHVzaCIsInBhcmFtcyIsInByb3AiLCJpbmRleCIsImVudHJpZXMiLCJpbmNsdWRlcyIsInBhcmFtIiwiZmllbGQiLCJvcHRpb25hbCIsInJlcGVhdGluZyIsInJlcGVhdGluZ0tleXMiLCJpc1JlcGVhdGluZ0ZpZWxkIiwiQXJyYXkiLCJpc0FycmF5IiwiZSIsInBhcnNlSGVscGVyIiwiZGVmS2V5IiwidmFsaWRGaWVsZHMiLCJSZWdleGVzIiwidmFsaWRhdGVQYXJhbXMiLCJjYXB0dXJlIiwidHJ1ZUlmVW5kZWZpbmVkIiwiZmllbGRLZXlzIiwic29ydCIsImEiLCJiIiwicGFyc2VJbnQiLCJtYXhLZXlTdHIiLCJ0bXBLZXkiLCJwb3AiLCJsZW5ndGgiLCJmaWVsZE5hbWUiLCJtYXhLZXkiLCJhYmlsaXR5TWVzc2FnZVR5cGUiLCJhYmlsaXR5SGV4Q29kZSIsInByZWZpeCIsInR5cGVBc0hleCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJkZWZhdWx0SGV4Q29kZSIsInNsaWNlIiwiaGV4Q29kZSIsInN0ciIsImxhc3RLZXkiLCJrZXlTdHIiLCJwYXJzZUZpZWxkIiwibWlzc2luZ0ZpZWxkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWVsZERlZmF1bHQiLCJkZWZhdWx0RmllbGRWYWx1ZSIsImZpZWxkVmFsdWUiLCJyZXBlYXRpbmdGaWVsZHNTZXBhcmF0b3IiLCJyZXBlYXRpbmdBcnJheSIsImxlZnQiLCJyaWdodCIsInRvTG93ZXJDYXNlIiwibG9jYWxlQ29tcGFyZSIsIndhcm4iLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiYW5vblJlcHMiLCJmb3JFYWNoIiwicG9zc2libGVLZXkiLCJyZXAiLCJmaW5kIiwiZmllbGRSZWdleCIsInZhbCIsInNvbWUiLCJ2IiwibWF5YmVDYXB0dXJlIiwicGFyc2UiLCJidWlsZFJlZ2V4IiwibG9nVmVyc2lvbiIsInN0YXJ0c1VzaW5nIiwiYWJpbGl0eUZ1bGwiLCJoZWFkTWFya2VyIiwiYWRkZWRDb21iYXRhbnQiLCJhZGRlZENvbWJhdGFudEZ1bGwiLCJyZW1vdmluZ0NvbWJhdGFudCIsImdhaW5zRWZmZWN0Iiwic3RhdHVzRWZmZWN0RXhwbGljaXQiLCJsb3Nlc0VmZmVjdCIsInRldGhlciIsIndhc0RlZmVhdGVkIiwibmV0d29ya0RvVCIsImVjaG8iLCJnYW1lTG9nIiwiZGlhbG9nIiwibWVzc2FnZSIsImdhbWVOYW1lTG9nIiwic3RhdENoYW5nZSIsImNoYW5nZVpvbmUiLCJuZXR3b3JrNmQiLCJuYW1lVG9nZ2xlIiwibWFwIiwic3lzdGVtTG9nTWVzc2FnZSIsIm1hcEVmZmVjdCIsImNvbWJhdGFudE1lbW9yeSIsInN0YXJ0c1VzaW5nRXh0cmEiLCJhYmlsaXR5RXh0cmEiLCJkZWZhdWx0VmFsdWUiLCJhbnlPZiIsIm5hbWVkQ2FwdHVyZSIsImVycm9yIiwiYXJncyIsImFueU9mQXJyYXkiLCJhcnJheSIsImVsZW0iLCJSZWdFeHAiLCJqb2luIiwiZmlyc3RBcmciLCJyZWdleHBTdHJpbmciLCJrQ2FjdGJvdENhdGVnb3JpZXMiLCJUaW1lc3RhbXAiLCJOZXRUaW1lc3RhbXAiLCJOZXRGaWVsZCIsIkxvZ1R5cGUiLCJBYmlsaXR5Q29kZSIsIk9iamVjdElkIiwiTmFtZSIsIkZsb2F0IiwibW9kaWZpZXJzIiwiZ2xvYmFsIiwibXVsdGlsaW5lIiwicmVwbGFjZSIsIm1hdGNoIiwiZ3JvdXAiLCJwYXJzZUdsb2JhbCIsInJlZ2V4IiwiZiIsImZ1bmNOYW1lIiwibWFnaWNUcmFuc2xhdGlvblN0cmluZyIsIm1hZ2ljU3RyaW5nUmVnZXgiLCJrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbkFzQ29uc3QiLCJrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbiIsImdhbWVMb2dDb2RlcyIsInRyYW5zUGFyYW1zIiwiZmlsdGVyIiwiayIsIm5lZWRzVHJhbnNsYXRpb25zIiwiTmV0UmVnZXhlcyIsImZsYWdUcmFuc2xhdGlvbnNOZWVkZWQiLCJzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkIiwiZG9lc05ldFJlZ2V4TmVlZFRyYW5zbGF0aW9uIiwiZXhlYyIsImZhdGVEaXJlY3RvciIsImNlRGlyZWN0b3IiLCJjb21tb25OZXRSZWdleCIsIndpcGUiLCJjYWN0Ym90V2lwZUVjaG8iLCJ1c2VyV2lwZUVjaG8iLCJidWlsZE5ldFJlZ2V4Rm9yVHJpZ2dlciIsImluaXRlZCIsIndzVXJsIiwid3MiLCJxdWV1ZSIsInJzZXFDb3VudGVyIiwicmVzcG9uc2VQcm9taXNlcyIsInN1YnNjcmliZXJzIiwic2VuZE1lc3NhZ2UiLCJtc2ciLCJjYiIsInNlbmQiLCJ3aW5kb3ciLCJPdmVybGF5UGx1Z2luQXBpIiwiY2FsbEhhbmRsZXIiLCJwcm9jZXNzRXZlbnQiLCJpbml0Iiwic3VicyIsInN1YiIsImRpc3BhdGNoT3ZlcmxheUV2ZW50IiwiYWRkT3ZlcmxheUxpc3RlbmVyIiwiZXZlbnQiLCJjYWxsIiwiZXZlbnRzIiwicmVtb3ZlT3ZlcmxheUxpc3RlbmVyIiwibGlzdCIsInBvcyIsImluZGV4T2YiLCJzcGxpY2UiLCJjYWxsT3ZlcmxheUhhbmRsZXJJbnRlcm5hbCIsIl9tc2ciLCJyc2VxIiwicCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsInBhcnNlZCIsImNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwIiwiY2FsbE92ZXJsYXlIYW5kbGVyIiwiY2FsbEZ1bmMiLCJzZXRPdmVybGF5SGFuZGxlck92ZXJyaWRlIiwib3ZlcnJpZGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJjb25uZWN0V3MiLCJXZWJTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwicSIsInByb21pc2VGdW5jcyIsInNldFRpbWVvdXQiLCJ3YWl0Rm9yQXBpIiwicmVhZHkiLCJfX092ZXJsYXlDYWxsYmFjayIsIml0ZW0iLCJjdXJyZW50Wm9uZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJ6b25lTmFtZSIsInpvbmVJRCIsImluQ29tYmF0IiwiZGV0YWlsIiwicGxheWVySWQiLCJjdXJyZW50SFAiLCJtYXhIUCIsImN1cnJlbnRNUCIsIm1heE1QIiwiY3AiLCJjdXJyZW50Q1AiLCJtYXhDUCIsImdwIiwiY3VycmVudEdQIiwibWF4R1AiLCJkZWJ1ZyIsImRlYnVnSm9iIiwiam9iSW5mbyIsImpvYkRldGFpbCIsIndoaXRlTWFuYSIsImJsYWNrTWFuYSIsIm1hbmFTdGFja3MiLCJiZWFzdCIsImJsb29kIiwiZGFya3NpZGVNaWxsaXNlY29uZHMiLCJkYXJrQXJ0cyIsImxpdmluZ1NoYWRvd01pbGxpc2Vjb25kcyIsImNhcnRyaWRnZXMiLCJjb250aW51YXRpb25TdGF0ZSIsIm9hdGgiLCJzb25nTmFtZSIsImxhc3RQbGF5ZWQiLCJzb25nUHJvY3MiLCJzb3VsR2F1Z2UiLCJzb25nTWlsbGlzZWNvbmRzIiwiY29kYSIsImZlYXRoZXJzIiwiZXNwcml0Iiwic3RlcHMiLCJjdXJyZW50U3RlcCIsImh1dG9uTWlsbGlzZWNvbmRzIiwibmlua2lBbW91bnQiLCJibG9vZE1pbGxpc2Vjb25kcyIsImxpZmVNaWxsaXNlY29uZHMiLCJleWVzQW1vdW50IiwiZmlyc3RtaW5kc0ZvY3VzIiwidW1icmFsU3RhY2tzIiwidW1icmFsTWlsbGlzZWNvbmRzIiwidW1icmFsSGVhcnRzIiwicG9seWdsb3QiLCJlbm9jaGlhbiIsIm5leHRQb2x5Z2xvdE1pbGxpc2Vjb25kcyIsInBhcmFkb3giLCJsaWx5U3RhY2tzIiwibGlseU1pbGxpc2Vjb25kcyIsImJsb29kbGlseVN0YWNrcyIsImFldGhlcmZsb3dTdGFja3MiLCJ0cmFuY2VNaWxsaXNlY29uZHMiLCJhdHR1bmVtZW50IiwiYXR0dW5lbWVudE1pbGxpc2Vjb25kcyIsImFjdGl2ZVByaW1hbCIsInVzYWJsZUFyY2FudW0iLCJuZXh0U3VtbW9uZWQiLCJmYWlyeUdhdWdlIiwiZmFpcnlTdGF0dXMiLCJmYWlyeU1pbGxpc2Vjb25kcyIsImhlbGRDYXJkIiwiY3Jvd25DYXJkIiwiYXJjYW51bXMiLCJjaGFrcmFTdGFja3MiLCJsdW5hck5hZGkiLCJzb2xhck5hZGkiLCJiZWFzdENoYWtyYSIsImhlYXQiLCJvdmVyaGVhdE1pbGxpc2Vjb25kcyIsImJhdHRlcnkiLCJiYXR0ZXJ5TWlsbGlzZWNvbmRzIiwibGFzdEJhdHRlcnlBbW91bnQiLCJvdmVyaGVhdEFjdGl2ZSIsInJvYm90QWN0aXZlIiwia2Vua2kiLCJtZWRpdGF0aW9uU3RhY2tzIiwic2V0c3UiLCJnZXRzdSIsImthIiwiYWRkZXJzZ2FsbCIsImFkZGVyc2dhbGxNaWxsaXNlY29uZHMiLCJhZGRlcnN0aW5nIiwiZXVrcmFzaWEiLCJzb3VsIiwic2hyb3VkIiwiZW5zaHJvdWRNaWxsaXNlY29uZHMiLCJsZW11cmVTaHJvdWQiLCJ2b2lkU2hyb3VkIiwidG9GaXhlZCIsInJvdGF0aW9uIiwiYmFpdCIsIlRhcmdldCIsInRpZCIsIklEIiwidGRpc3RhbmNlIiwiRGlzdGFuY2UiLCJfZSIsInR0c0VjaG9SZWdleCIsInJhd0xpbmUiLCJncm91cHMiLCJjb2xvbiIsInRleHQiLCJmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==