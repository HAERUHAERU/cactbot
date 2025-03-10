import Outputs from '../../../../../resources/outputs';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

// TODO: Lyssa Frostbite and Seek
// TODO: Hermes correct meteor
// TODO: Hermes mirror dodge direction

export interface Data extends RaidbossData {
  ladonBreaths: string[];
  isHermes?: boolean;
}

const triggerSet: TriggerSet<Data> = {
  id: 'KtisisHyperboreia',
  zoneId: ZoneId.KtisisHyperboreia,
  timelineFile: 'ktisis_hyperboreia.txt',
  initData: () => {
    return {
      ladonBreaths: [],
    };
  },
  triggers: [
    {
      id: 'Ktisis Lyssa Skull Dasher',
      type: 'StartsUsing',
      netRegex: { id: '625E', source: 'Lyssa' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Ktisis Lyssa Frigid Stomp',
      type: 'StartsUsing',
      netRegex: { id: '625D', source: 'Lyssa', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Ktisis Lyssa Heavy Smash',
      type: 'StartsUsing',
      netRegex: { id: '625C', source: 'Lyssa' },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Ktisis Ladon Lord Scratch',
      type: 'StartsUsing',
      netRegex: { id: '648F', source: 'Ladon Lord' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Ktisis Ladon Lord Intimidation',
      type: 'StartsUsing',
      netRegex: { id: '648D', source: 'Ladon Lord', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Ktisis Ladon Lord Pyric Blast',
      type: 'StartsUsing',
      netRegex: { id: '648E', source: 'Ladon Lord' },
      response: Responses.stackMarkerOn(),
    },
    {
      // AFC: Center head; AFD: Right head; AFE: Left head
      id: 'Ktisis Ladon Lord Pyric Breath Collect',
      type: 'GainsEffect',
      netRegex: { effectId: ['AFC', 'AFD', 'AFE'] },
      run: (data, matches) => data.ladonBreaths.push(matches.effectId),
    },
    {
      id: 'Ktisis Ladon Lord Pyric Breath Call',
      type: 'Ability',
      netRegex: { id: '6485', source: 'Ladon Lord', capture: false }, // Call on boss centering
      delaySeconds: 2, // Let the rotation happen first or simultaneously
      alertText: (data, _matches, output) => {
        // Somehow we have no breath data. Sadge.
        if (data.ladonBreaths.length === 0)
          return;

        // The first breath in the encounter is always center head
        if (data.ladonBreaths.length === 1)
          return output.awayFromFront!();

        const safeId = ['AFC', 'AFD', 'AFE'].filter((id) => !data.ladonBreaths.includes(id))[0];
        if (safeId === undefined)
          return;
        return {
          AFC: output.goFront,
          AFD: output.backLeft,
          AFE: output.backRight,
        }[safeId]!();
      },
      run: (data) => data.ladonBreaths = [],
      outputStrings: {
        awayFromFront: Outputs.awayFromFront,
        goFront: Outputs.goFront,
        backRight: {
          en: 'Get behind and right',
          de: 'Nach Hinten und Rechts',
          fr: 'Allez derrière et à droite',
          ko: '오른쪽 뒤로',
        },
        backLeft: {
          en: 'Get behind and left',
          de: 'Nach Hinten und Links',
          fr: 'Allez derrière et à gauche',
          ko: '왼쪽 뒤로',
        },
      },
    },
    {
      id: 'Ktisis Hermes Trimegistos',
      type: 'StartsUsing',
      netRegex: { id: '651E', source: 'Hermes', capture: false },
      response: Responses.aoe(),
      run: (data) => data.isHermes = true,
    },
    {
      id: 'Ktisis Hermes True Tornado',
      // StartsUsing line is self-targeted.
      type: 'HeadMarker',
      netRegex: { id: '00DA' },
      // This headmarker is used for the first two bosses but only Hermes cleaves.
      condition: (data) => data.isHermes,
      response: Responses.tankCleave('alert'),
    },
    {
      id: 'Ktisis Hermes True Aero',
      type: 'StartsUsing',
      netRegex: { id: '652B', source: 'Hermes', capture: false },
      response: Responses.spread(),
    },
    {
      id: 'Ktisis Hermes True Bravery',
      type: 'StartsUsing',
      netRegex: { id: '6533', source: 'Hermes' },
      condition: (data) => data.CanSilence(),
      response: Responses.interrupt(),
    },
    {
      id: 'Ktisis Hermes Meteor Cosmic Kiss',
      type: 'Ability',
      netRegex: { id: '6523', source: 'Meteor', capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Hide behind unbroken meteor',
          de: 'Hinter einem nicht zerbrochenen Meteor verstecken',
          fr: 'Cachez-vous derrière le météore intact',
          ja: '壊れていないメテオの後ろへ',
          cn: '躲在未破碎的陨石后',
          ko: '금이 안 간 돌 뒤에 숨기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Concept Review': 'Konzeptbewertung',
        'Hermes': 'Hermes',
        'Ice Pillar': 'Eissäule',
        'Karukeion': 'Kerykeion',
        'Ladon Lord': 'Ladon-Lord',
        'Lyssa': 'Lyssa',
        'Meteor': 'Meteor',
        'Pyric Sphere': 'Pyrische Sphäre',
        'The Celestial Sphere': 'Astralzone',
        'The Frozen Sphere': 'Kaltzone',
      },
      'replaceText': {
        'Cosmic Kiss': 'Einschlag',
        'Double': 'Doppel',
        'Frigid Stomp': 'Froststampfer',
        'Frostbite and Seek': 'In eisige Winde gehüllt',
        'Heavy Smash': 'Schwerer Klopfer',
        'Hermetica': 'Hermetika',
        'Ice Pillar': 'Eissäule',
        'Icicall': 'Eiszapfen-Brüller',
        'Inhale': 'Inhalieren',
        'Intimidation': 'Einschüchterungsversuch',
        'Meteor': 'Meteor',
        'Pillar Pierce': 'Säulendurchschlag',
        'Punishing Slice': 'Strafender Schlitzer',
        'Pyric Blast': 'Pyrischer Rumms',
        'Pyric Breath': 'Pyrischer Atem',
        'Pyric Sphere': 'Pyrische Sphäre',
        'Quadruple': 'Quadrupel',
        'Scratch': 'Schramme',
        'Skull Dasher': 'Schädelzertrümmerer',
        'Trismegistos': 'Trismegistus',
        'True Aero(?! I)': 'Vollkommener Wind',
        'True Aero II': 'Vollkommenes Windra',
        'True Aero IV': 'Vollkommenes Windka',
        'True Tornado': 'Vollkommener Tornado',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Concept Review': 'Salle d\'évaluation',
        'Hermes': 'Hermès',
        'Ice Pillar': 'Pilier de glace',
        'Karukeion': 'kerykeion',
        'Ladon Lord': 'seigneur Ladon',
        'Lyssa': 'Lyssa',
        'Meteor': 'Météore',
        'Pyric Sphere': 'Sphère pyrogène',
        'The Celestial Sphere': 'Voûte céleste',
        'The Frozen Sphere': 'Glacier artificiel',
      },
      'replaceText': {
        'Cosmic Kiss': 'Impact de canon',
        'Double': 'Double',
        'Frigid Stomp': 'Piétinement glacial',
        'Frostbite and Seek': 'Gelure furtive',
        'Heavy Smash': 'Fracas violent',
        'Hermetica': 'Hermética',
        'Ice Pillar': 'Pilier de glace',
        'Icicall': 'Stalactite rugissante',
        'Inhale': 'Inhalation',
        'Intimidation': 'Intimidation',
        'Meteor': 'Météore',
        'Pillar Pierce': 'Empalement',
        'Punishing Slice': 'Tranchage punitif',
        'Pyric Blast': 'Souffle pyrogène',
        'Pyric Breath': 'Bouffée pyrogène',
        'Pyric Sphere': 'Sphère pyrogène',
        'Quadruple': 'Quadruple',
        'Scratch': 'Griffade',
        'Skull Dasher': 'Charge du crâne',
        'Trismegistos': 'Trismégistos',
        'True Aero(?! I)': 'Vent véritable',
        'True Aero II': 'Extra Vent véritable',
        'True Aero IV': 'Giga Vent véritable',
        'True Tornado': 'Tornade véritable',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Concept Review': '創造生物評価室',
        'Hermes': 'ヘルメス',
        'Ice Pillar': '氷柱',
        'Karukeion': 'ケリュケイオン',
        'Ladon Lord': 'ラドンロード',
        'Lyssa': 'リッサ',
        'Meteor': 'メテオ',
        'Pyric Sphere': 'パイリックスフィア',
        'The Celestial Sphere': '天脈創造環境',
        'The Frozen Sphere': '寒冷創造環境',
      },
      'replaceText': {
        'Cosmic Kiss': '着弾',
        'Double': 'ダブル',
        'Frigid Stomp': 'フリジッドストンプ',
        'Frostbite and Seek': 'フロストバイト・アンドシーク',
        'Heavy Smash': 'ヘビースマッシュ',
        'Hermetica': 'ヘルメチカ',
        'Ice Pillar': '氷柱',
        'Icicall': 'アイシクルロア',
        'Inhale': 'インヘイル',
        'Intimidation': 'インティミデーション',
        'Meteor': 'メテオ',
        'Pillar Pierce': '激突',
        'Punishing Slice': 'パニッシングスライス',
        'Pyric Blast': 'パイリックブラスト',
        'Pyric Breath': 'パイリックブレス',
        'Pyric Sphere': 'パイリックスフィア',
        'Quadruple': 'クアドラプル',
        'Scratch': 'スクラッチ',
        'Skull Dasher': 'スカルダッシャー',
        'Trismegistos': 'トリスメギストス',
        'True Aero(?! I)': 'トゥルー・エアロ',
        'True Aero II': 'トゥルー・エアロラ',
        'True Aero IV': 'トゥルー・エアロジャ',
        'True Tornado': 'トゥルー・トルネド',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Concept Review': '创造生物评价室',
        'Hermes': '赫尔墨斯',
        'Ice Pillar': '冰柱',
        'Karukeion': '双蛇杖纹',
        'Ladon Lord': '拉冬之王',
        'Lyssa': '吕萨',
        'Meteor': '陨石',
        'Pyric Sphere': '燃烧晶球',
        'The Celestial Sphere': '天脉创造环境',
        'The Frozen Sphere': '寒冷创造环境',
      },
      'replaceText': {
        'Cosmic Kiss': '流星坠落',
        'Double': '双重',
        'Frigid Stomp': '严寒踏压',
        'Frostbite and Seek': '寒霜寻影',
        'Heavy Smash': '重挥碎击',
        'Hermetica': '赫尔墨斯文集',
        'Ice Pillar': '冰柱',
        'Icicall': '召唤冰柱',
        'Inhale': '吸引',
        'Intimidation': '恐吓',
        'Meteor': '陨石',
        'Pillar Pierce': '激突',
        'Punishing Slice': '惩罚切',
        'Pyric Blast': '燃烧爆发',
        'Pyric Breath': '燃烧吐息',
        'Pyric Sphere': '燃烧晶球',
        'Quadruple': '四重',
        'Scratch': '抓击',
        'Skull Dasher': '铁颅猛击',
        'Trismegistos': '三重伟大',
        'True Aero(?! I)': '纯正疾风',
        'True Aero II': '纯正烈风',
        'True Aero IV': '纯正飙风',
        'True Tornado': '纯正龙卷',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Concept Review': '창조 생물 평가실',
        'Hermes': '헤르메스',
        'Ice Pillar': '고드름',
        'Karukeion': '케뤼케이온',
        'Ladon Lord': '라돈 왕',
        'Lyssa': '릿사',
        'Meteor': '메테오',
        'Pyric Sphere': '연소 구체',
        'The Celestial Sphere': '천맥 창조 환경',
        'The Frozen Sphere': '한랭 창조 환경',
      },
      'replaceText': {
        'Cosmic Kiss': '착탄',
        'Double': '이중 공격',
        'Frigid Stomp': '냉혹한 발구르기',
        'Frostbite and Seek': '꽁꽁 숨바꼭질',
        'Heavy Smash': '육중한 타격',
        'Hermetica': '헤르메티카',
        'Ice Pillar': '고드름',
        'Icicall': '고드름 포효',
        'Inhale': '빨아들이기',
        'Intimidation': '엄포',
        'Meteor': '메테오',
        'Pillar Pierce': '격돌',
        'Punishing Slice': '벌칙 베기',
        'Pyric Blast': '연소 작렬',
        'Pyric Breath': '연소 숨결',
        'Pyric Sphere': '연소 구체',
        'Quadruple': '사중 공격',
        'Scratch': '생채기',
        'Skull Dasher': '두개골 박살',
        'Trismegistos': '트리스메기스토스',
        'True Aero II': '진 에어로라',
        'True Aero IV': '진 에어로쟈',
        'True Tornado': '진 토네이도',
        'True Aero(?! I)': '진 에어로',
      },
    },
  ],
};

export default triggerSet;
