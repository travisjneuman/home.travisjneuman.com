const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */

    commands: [
    /**
*Search Service, just start typing!
*/
    {
      name: 'StartPage',
      key: '*',
      url: 'https://www.startpage.com/do/mypage.pl?prfe=af8f2d54d9febef83f26fd640bc4603c2cf09104794e4bd56fe16e52451a96fcfa78e437f538a4c8f228bc3ee57d23de1b9621b446246d9265a3e7322b50e75a591596775690f520ee1116',
      search: '/sp/search?query={}',
      color: '#0e0e0e',
    },
    /**
*Search Service, just start typing!
*/
    {
      category: 'Internal',
      name: 'Nest',
      url: 'https://home.nest.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'nest',
      quickLaunch: true,
    },
   /**{
      category: 'Internal',
      name: 'TrueNAS',
      url: 'http://truenas.local/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'truenas',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'AdGuard',
      url: 'http://192.168.1.37/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'adguard',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'Ubuntu VM (VNC via TrueNAS)',
      url: 'http://192.168.1.35:39595/vnc.html?autoconnect=1',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'ubuntuvm',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'Kemp (Disabled)',
      url: 'http://kemp.travisjneuman.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'kemp',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'Plex (Disabled)',
      url: 'https://plex.travisjneuman.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'plex',
      quickLaunch: true,
    },*/
    {
      category: 'Internal',
      name: 'Grafana (rPi)',
      url: 'http://tjnrpi.local:3000/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'grafana',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'NetData (rPi)',
      url: 'http://tjnrpi.local:19999/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'netdata',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'PiHole (rPi)',
      url: 'http://tjnrpi.local/admin',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'pihole',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'Edge Router (Local)',
      url: 'https://192.168.1.1/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'edge',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'Edge Switch (Local)',
      url: 'https://192.168.1.100/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'edge',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'UniFi Controller (Local)',
      url: 'https://192.168.1.36:8443',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'unifi',
      quickLaunch: true,
    },
    {
      category: 'Internal',
      name: 'Modem (Local)',
      url: 'http://192.168.100.1/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'modem',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'Proton',
      url: 'https://account.proton.me/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'proton',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'iCloud',
      url: 'https://beta.icloud.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'icloud',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'Google Voice',
      url: 'https://voice.google.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'gvoice',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'YouTube Studio',
      url: 'https://studio.youtube.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'studio',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'Google One',
      url: 'https://one.google.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'googleone',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'Google Fi',
      url: 'https://fi.google.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'googlefi',
      quickLaunch: true,
    },
    /**{
      category: 'Services',
      name: 'Google Domains',
      url: 'https://domains.google.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'googledomains',
      quickLaunch: true,
    },*/
    {
      category: 'Services',
      name: 'Github',
      url: 'https://github.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'github',
      quickLaunch: true,
    },
    /**{
      category: 'Services',
      name: 'Netlify',
      url: 'https://netlify.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'netlify',
      quickLaunch: true,
    },*/
    {
      category: 'Services',
      name: 'Cloudflare',
      url: 'https://dash.cloudflare.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'cloudflare',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'Oracle Cloud',
      url: 'https://cloud.oracle.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'oracle',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'BARD',
      url: 'https://bard.google.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'googlebard',
      quickLaunch: true,
    },
    {
      category: 'Services',
      name: 'ChatGPT',
      url: 'https://chat.openai.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'chatgpt',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Business Card',
      url: 'https://info.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'ovou',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'TJN',
      url: 'https://travisjneuman.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'tjn',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'N.Dev',
      url: 'https://neuman.dev/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'ndev',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'LinkedIn',
      url: 'https://linkedin.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Github',
      url: 'https://github.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Youtube',
      url: 'https://youtube.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'youtube',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Instagram',
      url: 'https://instagram.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Twitter',
      url: 'https://twitter.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Facebook',
      url: 'https://facebook.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'facebook',
      quickLaunch: true,
    },
    {
      category: 'Personal',
      name: 'Universal Expert',
      url: 'https://ai.travisjneuman.com',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'UniEx',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'Youtube',
      url: 'https://youtube.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'youtube',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'YoutubeTV',
      url: 'https://tv.youtube.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'youtubetv',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'Youtube Music',
      url: 'https://music.youtube.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'youtubemusic',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'MGoBlog',
      url: 'https://mgoblog.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'mgoblog',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'ESPN',
      url: 'https://espn.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'espn',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'On3',
      url: 'https://www.on3.com/teams/michigan-wolverines/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'on3',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'Reddit',
      url: 'https://reddit.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'reddit',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'HackerNews',
      url: 'https://hackernews.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'hackernews',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'Soundcloud',
      url: 'https://soundcloud.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'soundcloud',
      quickLaunch: true,
    },
    {
      category: 'Entertainment',
      name: 'SportSurge',
      url: 'https://sportsurge.net/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'sportsurge',
      quickLaunch: true,
    },
   /** {
      category: 'Tech Stuff',
      name: '0365 Admin',
      url: 'https://admin.microsoft.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'o365admin',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'O365 Mail',
      url: 'https://outlook.office.com/mail',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'outlook',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: '0365 Calendar',
      url: 'https://outlook.office.com/calendar/view/month',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'calendar',
      quickLaunch: true,
    },*/
    {
      category: 'Tech Stuff',
      name: 'Udemy',
      url: 'https://udemy.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'udemy',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'EdX',
      url: 'https://edx.org/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'edx',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'Google Grow',
      url: 'https://grow.google.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'googlegrow',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'DNS Leak Test',
      url: 'https://dnsleaktest.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'dnsleaktest',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'IP-Secrets',
      url: 'https://ip-secrets.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'ipsecrets',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'AnonAddy',
      url: 'https://anonaddy.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'anonaddy',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'Grabify',
      url: 'https://grabify.link',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'grabify',
      quickLaunch: true,
    },
    {
      category: 'Tech Stuff',
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
    /*{
      category: 'Backups',
      name: 'uBlock',
      url: '/files/backup/ublock.txt',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'ublock',
      quickLaunch: true,
    },
    {
      category: 'Backups',
      name: 'Bookmarks',
      url: '/files/backup/bookmarks.html',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'bookmarks',
      quickLaunch: true,
    },*/
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 12,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [
    { name: 'Default', limit: 4 },
    { name: 'History', limit: 1 },
    { name: 'DuckDuckGo', limit: 4 },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: true,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: false,

  /**
   * Reverse color theme
   */
  reversedColors: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,
};

const $ = {
  bodyClassAdd: c => $.el('body').classList.add(c),
  bodyClassRemove: c => $.el('body').classList.remove(c),
  el: s => document.querySelector(s),
  els: s => [].slice.call(document.querySelectorAll(s) || []),
  escapeRegex: s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
  flattenAndUnique: arr => [...new Set([].concat.apply([], arr))],
  ieq: (a, b) => a.toLowerCase() === b.toLowerCase(),
  iin: (a, b) => a.toLowerCase().indexOf(b.toLowerCase()) !== -1,
  isDown: e => ['c-n', 'down', 'tab'].includes($.key(e)),
  isRemove: e => ['backspace', 'delete'].includes($.key(e)),
  isUp: e => ['c-p', 'up', 's-tab'].includes($.key(e)),

  jsonp: url => {
    let script = document.createElement('script');
    script.src = url;
    $.el('head').appendChild(script);
  },

  key: e => {
    const ctrl = e.ctrlKey;
    const shift = e.shiftKey;

    switch (e.which) {
      case 8:
        return 'backspace';
      case 9:
        return shift ? 's-tab' : 'tab';
      case 13:
        return 'enter';
      case 16:
        return 'shift';
      case 17:
        return 'ctrl';
      case 18:
        return 'alt';
      case 27:
        return 'escape';
      case 38:
        return 'up';
      case 40:
        return 'down';
      case 46:
        return 'delete';
      case 78:
        return ctrl ? 'c-n' : 'n';
      case 80:
        return ctrl ? 'c-p' : 'p';
      case 189:
        return 'dash';
      case 91:
      case 93:
      case 224:
        return 'super';
    }
  },

  pad: v => ('0' + v.toString()).slice(-2),
};

class Clock {
  constructor(options) {
    this._el = $.el('#clock');
    this._delimiter = options.delimiter;
    this._twentyFourHourClock = options.twentyFourHourClock;
    this._setTime = this._setTime.bind(this);
    this._el.addEventListener('click', options.toggleHelp);
    this._start();
  }

  _setTime() {
    const date = new Date();
    let hours = $.pad(date.getHours());
    let amPm = '';

    if (!this._twentyFourHourClock) {
      hours = date.getHours();
      if (hours > 12) hours -= 12;
      else if (hours === 0) hours = 12;

      amPm =
        `&nbsp;<span class="am-pm">` +
        `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;
    }

    const minutes = $.pad(date.getMinutes());
    this._el.innerHTML = `${hours}${this._delimiter}${minutes}${amPm}`;
    this._el.setAttribute('datetime', date.toTimeString());
  }

  _start() {
    this._setTime();
    setInterval(this._setTime, 1000);
  }
}

class Help {
  constructor(options) {
    this._el = $.el('#help');
    this._commands = options.commands;
    this._newTab = options.newTab;
    this._toggled = false;
    this._handleKeydown = this._handleKeydown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.launch = this.launch.bind(this);
    this._inputEl = $.el('#search-input');
    this._inputElVal = '';
    this._suggester = options.suggester;
    this._reverseColors = options.reversedColors;
    this._buildAndAppendLists();
    this._registerEvents();
    this._invertValue;
  }

  toggle(show) {
    this._toggled = typeof show !== 'undefined' ? show : !this._toggled;
    this._toggled ? $.bodyClassAdd('help') : $.bodyClassRemove('help');
  }

  hide() {
    $.bodyClassRemove('form');
    this._inputEl.value = '';
    this._inputElVal = '';
    this._suggester.suggest('');
  }

  launch() {
    this.hide();
    this.toggle(true);
    $.bodyClassAdd('help');
    for (let i = 0; i < CONFIG.commands.length; i++) {
      if (CONFIG.commands[i].quickLaunch === true) {
        window.open(CONFIG.commands[i].url);
      }
    }
  }

  _buildAndAppendLists() {
    const lists = document.createElement('ul');
    lists.classList.add('categories');

    this._getCategories().forEach(category => {
      lists.insertAdjacentHTML(
        'beforeend',
        `<li class="category">
          <h2 class="category-name">${category}</h2>
          <ul>${this._buildListCommands(category)}</ul>
        </li>`
      );
    });

    this._el.appendChild(lists);
  }

  _buildListCommands(currentCategory) {
    this._invertValue = this._reverseColors ? 1: 0;

    return this._commands
      .map(({ category, name, key, url, icon }) => {
        if (category === currentCategory) {
          return `
            <li class="command">
              <a href="${url}" target="${this._newTab ? '_blank' : '_self'}">
                <span class="command-key"><img src='assets/icons/${icon}.png' height = 36px center style="filter: none(${this._invertValue});"></span>
                <span class="command-name">${name}</span>
              </a>
            </li>
          `;
        }
      })
      .join('');
  }

  _getCategories() {
    const categories = this._commands
      .map(v => v.category)
      .filter(category => category);

    return [...new Set(categories)];
  }

  _handleKeydown(e) {
    if ($.key(e) === 'escape') this.toggle(false);
  }

  _registerEvents() {
    document.addEventListener('keydown', this._handleKeydown);
  }
}

class Influencer {
  constructor(options) {
    this._limit = options.limit;
    this._parseQuery = options.parseQuery;
  }

  addItem() {}
  getSuggestions() {}

  _addSearchPrefix(items, query) {
    const searchPrefix = this._getSearchPrefix(query);
    return items.map(s => (searchPrefix ? searchPrefix + s : s));
  }

  _getSearchPrefix(query) {
    const { isSearch, key, split } = this._parseQuery(query);
    return isSearch ? `${key}${split} ` : false;
  }
}

class DefaultInfluencer extends Influencer {
  constructor({ defaultSuggestions }) {
    super(...arguments);
    this._defaultSuggestions = defaultSuggestions;
  }

  getSuggestions(query) {
    return new Promise(resolve => {
      const suggestions = this._defaultSuggestions[query];
      resolve(suggestions ? suggestions.slice(0, this._limit) : []);
    });
  }
}

class DuckDuckGoInfluencer extends Influencer {
  constructor({ queryParser }) {
    super(...arguments);
  }

  getSuggestions(rawQuery) {
    const { query } = this._parseQuery(rawQuery);
    if (!query) return Promise.resolve([]);

    return new Promise(resolve => {
      const endpoint = 'https://duckduckgo.com/ac/';
      const callback = 'autocompleteCallback';

      window[callback] = res => {
        const suggestions = res
          .map(i => i.phrase)
          .filter(s => !$.ieq(s, query))
          .slice(0, this._limit);

        resolve(this._addSearchPrefix(suggestions, rawQuery));
      };

      $.jsonp(`${endpoint}?callback=${callback}&q=${query}`);
    });
  }
}

class HistoryInfluencer extends Influencer {
  constructor() {
    super(...arguments);
    this._storeName = 'history';
  }

  addItem(query) {
    if (query.length < 2) return;
    let exists;

    const history = this._getHistory().map(([item, count]) => {
      const match = $.ieq(item, query);
      if (match) exists = true;
      return [item, match ? count + 1 : count];
    });

    if (!exists) history.push([query, 1]);

    const sorted = history
      .sort((current, next) => current[1] - next[1])
      .reverse();

    this._setHistory(sorted);
  }

  getSuggestions(query) {
    return new Promise(resolve => {
      const suggestions = this._getHistory()
        .map(([item]) => item)
        .filter(item => query && !$.ieq(item, query) && $.iin(item, query))
        .slice(0, this._limit);

      resolve(suggestions);
    });
  }

  _fetch() {
    return JSON.parse(localStorage.getItem(this._storeName)) || [];
  }

  _getHistory() {
    this._history = this._history || this._fetch();
    return this._history;
  }

  _save(history) {
    localStorage.setItem(this._storeName, JSON.stringify(history));
  }

  _setHistory(history) {
    this._history = history;
    this._save(history);
  }
}

class Suggester {
  constructor(options) {
    this._el = $.el('#search-suggestions');
    this._enabled = options.enabled;
    this._influencers = options.influencers;
    this._limit = options.limit;
    this._suggestionEls = [];
    this._handleKeydown = this._handleKeydown.bind(this);
    this._registerEvents();
  }

  setOnClick(callback) {
    this._onClick = callback;
  }

  setOnHighlight(callback) {
    this._onHighlight = callback;
  }

  setOnUnhighlight(callback) {
    this._onUnhighlight = callback;
  }

  success(query) {
    this._clearSuggestions();
    this._influencers.forEach(i => i.addItem(query));
  }

  suggest(input) {
    if (!this._enabled) return;
    input = input.trim();
    if (input === '') this._clearSuggestions();

    Promise.all(this._getInfluencerPromises(input)).then(res => {
      const suggestions = $.flattenAndUnique(res);
      this._clearSuggestions();

      if (suggestions.length) {
        this._appendSuggestions(suggestions, input);
        this._registerSuggestionHighlightEvents();
        this._registerSuggestionClickEvents();
        $.bodyClassAdd('suggestions');
      }
    });
  }

  _appendSuggestions(suggestions, input) {
    suggestions.some((suggestion, i) => {
      const match = new RegExp($.escapeRegex(input), 'ig');
      const suggestionHtml = suggestion.replace(match, `<b>${input}</b>`);

      this._el.insertAdjacentHTML(
        'beforeend',
        `<li>
          <button
            type="button"
            class="js-search-suggestion search-suggestion"
            data-suggestion="${suggestion}"
            tabindex="-1"
          >
            ${suggestionHtml}
          </button>
        </li>`
      );

      if (i + 1 >= this._limit) return true;
    });

    this._suggestionEls = $.els('.js-search-suggestion');
  }

  _clearSuggestionClickEvents() {
    this._suggestionEls.forEach(el => {
      el.removeEventListener('click', this._onClick);
    });
  }

  _clearSuggestionHighlightEvents() {
    this._suggestionEls.forEach(el => {
      el.removeEventListener('mouseover', this._highlight);
      el.removeEventListener('mouseout', this._unHighlight);
    });
  }

  _clearSuggestions() {
    $.bodyClassRemove('suggestions');
    this._clearSuggestionHighlightEvents();
    this._clearSuggestionClickEvents();
    this._suggestionEls = [];
    this._el.innerHTML = '';
  }

  _focusNext(e) {
    const exists = this._suggestionEls.some((el, i) => {
      if (el.classList.contains('highlight')) {
        this._highlight(this._suggestionEls[i + 1], e);
        return true;
      }
    });

    if (!exists) this._highlight(this._suggestionEls[0], e);
  }

  _focusPrevious(e) {
    const exists = this._suggestionEls.some((el, i) => {
      if (el.classList.contains('highlight') && i) {
        this._highlight(this._suggestionEls[i - 1], e);
        return true;
      }
    });

    if (!exists) this._unHighlight(e);
  }

  _getInfluencerPromises(input) {
    return this._influencers.map(influencer =>
      influencer.getSuggestions(input)
    );
  }

  _handleKeydown(e) {
    if ($.isDown(e)) this._focusNext(e);
    if ($.isUp(e)) this._focusPrevious(e);
  }

  _highlight(el, e) {
    this._unHighlight();
    if (!el) return;
    this._onHighlight(el.getAttribute('data-suggestion'));
    el.classList.add('highlight');
    e.preventDefault();
  }

  _registerEvents() {
    document.addEventListener('keydown', this._handleKeydown);
  }

  _registerSuggestionClickEvents() {
    this._suggestionEls.forEach(el => {
      const value = el.getAttribute('data-suggestion');
      el.addEventListener('click', this._onClick.bind(null, value));
    });
  }

  _registerSuggestionHighlightEvents() {
    const noHighlightUntilMouseMove = () => {
      window.removeEventListener('mousemove', noHighlightUntilMouseMove);

      this._suggestionEls.forEach(el => {
        el.addEventListener('mouseover', this._highlight.bind(this, el));
        el.addEventListener('mouseout', this._unHighlight.bind(this));
      });
    };

    window.addEventListener('mousemove', noHighlightUntilMouseMove);
  }

  _unHighlight(e) {
    const el = $.el('.highlight');
    if (!el) return;
    this._onUnhighlight();
    el.classList.remove('highlight');
    if (e) e.preventDefault();
  }
}

class QueryParser {
  constructor(options) {
    this._commands = options.commands;
    this._searchDelimiter = options.searchDelimiter;
    this._pathDelimiter = options.pathDelimiter;
    this._protocolRegex = /^[a-zA-Z]+:\/\//i;
    this._urlRegex = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i;
    this.parse = this.parse.bind(this);
  }

  parse(query) {
    const res = { query: query, split: null };

    if (this._urlRegex.test(query)) {
      const hasProtocol = this._protocolRegex.test(query);
      res.redirect = hasProtocol ? query : 'http://' + query;
    } else {
      const trimmed = query.trim();
      const splitSearch = trimmed.split(this._searchDelimiter);
      const splitPath = trimmed.split(this._pathDelimiter);

      this._commands.some(({ category, key, name, search, url }) => {
        if (query === key) {
          res.key = key;
          res.isKey = true;
          res.redirect = url;
          return true;
        }

        if (splitSearch[0] === key && search) {
          res.key = key;
          res.isSearch = true;
          res.split = this._searchDelimiter;
          res.query = QueryParser._shiftAndTrim(splitSearch, res.split);
          res.redirect = QueryParser._prepSearch(url, search, res.query);
          return true;
        }

        if (splitPath[0] === key) {
          res.key = key;
          res.isPath = true;
          res.split = this._pathDelimiter;
          res.path = QueryParser._shiftAndTrim(splitPath, res.split);
          res.redirect = QueryParser._prepPath(url, res.path);
          return true;
        }

        if (key === '*') {
          res.redirect = QueryParser._prepSearch(url, search, query);
        }
      });
    }

    res.color = QueryParser._getColorFromUrl(this._commands, res.redirect);
    return res;
  }

  static _getColorFromUrl(commands, url) {
    const domain = new URL(url).hostname;

    return (
      commands
        .filter(c => new URL(c.url).hostname.includes(domain))
        .map(c => c.color)[0] || null
    );
  }

  static _prepPath(url, path) {
    return QueryParser._stripUrlPath(url) + '/' + path;
  }

  static _prepSearch(url, searchPath, query) {
    if (!searchPath) return url;
    const baseUrl = QueryParser._stripUrlPath(url);
    const urlQuery = encodeURIComponent(query);
    searchPath = searchPath.replace('{}', urlQuery);
    return baseUrl + searchPath;
  }

  static _shiftAndTrim(arr, delimiter) {
    arr.shift();
    return arr.join(delimiter).trim();
  }

  static _stripUrlPath(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return `${parser.protocol}//${parser.hostname}`;
  }
}

class Form {
  constructor(options) {
    this._colors = options.colors;
    this._formEl = $.el('#search-form');
    this._inputEl = $.el('#search-input');
    this._inputElVal = '';
    this._instantRedirect = options.instantRedirect;
    this._newTab = options.newTab;
    this._parseQuery = options.parseQuery;
    this._suggester = options.suggester;
    this._toggleHelp = options.toggleHelp;
    this._quickLaunch = options.quickLaunch;
    this._clearPreview = this._clearPreview.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
    this._previewValue = this._previewValue.bind(this);
    this._submitForm = this._submitForm.bind(this);
    this._submitWithValue = this._submitWithValue.bind(this);
    this._reverseColors = options.reversedColors;
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this._registerEvents();
    this._loadQueryParam();
    this.reverse();
  }

  hide() {
    $.bodyClassRemove('form');
    this._inputEl.value = '';
    this._inputElVal = '';
    this._suggester.suggest('');
    this._setBackgroundFromQuery('');
  }

  show() {
    $.bodyClassAdd('form');
    this._inputEl.focus();
  }

  reverse() {
    if (this._reverseColors) {
      document.documentElement.style.setProperty('--background', '#F1F1F1');
      document.documentElement.style.setProperty('--foreground', '#0e0e0e');
    }
  }

  _clearPreview() {
    this._previewValue(this._inputElVal);
    this._inputEl.focus();
  }

  _handleInput() {
    const newQuery = this._inputEl.value;
    const isHelp = newQuery === '?';
    const isLaunch = newQuery === '!';
    const { isKey } = this._parseQuery(newQuery);
    this._inputElVal = newQuery;
    this._suggester.suggest(newQuery);
    this._setBackgroundFromQuery(newQuery);
    if (!newQuery || isHelp) this.hide();
    if (isHelp) this._toggleHelp();
    if (isLaunch) this._quickLaunch();
    if (this._instantRedirect && isKey) this._submitWithValue(newQuery);
  }

  _handleKeydown(e) {
    if ($.isUp(e) || $.isDown(e) || $.isRemove(e)) return;

    switch ($.key(e)) {
      case 'alt':
      case 'ctrl':
      case 'enter':
      case 'shift':
      case 'super':
        return;
      case 'escape':
        this.hide();
        return;
    }

    this.show();
  }

  _loadQueryParam() {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) this._submitWithValue(q);
  }

  _previewValue(value) {
    this._inputEl.value = value;
    this._setBackgroundFromQuery(value);
  }

  _redirect(redirect) {
    if (this._newTab) window.open(redirect, '_blank');
    else window.location.href = redirect;
  }

  _registerEvents() {
    document.addEventListener('keydown', this._handleKeydown);
    this._inputEl.addEventListener('input', this._handleInput);
    this._formEl.addEventListener('submit', this._submitForm, false);

    if (this._suggester) {
      this._suggester.setOnClick(this._submitWithValue);
      this._suggester.setOnHighlight(this._previewValue);
      this._suggester.setOnUnhighlight(this._clearPreview);
    }
  }

  _setBackgroundFromQuery(query) {
    if (!this._colors) return;
    this._formEl.style.background = this._parseQuery(query).color;
  }

  _submitForm(e) {
    if (e) e.preventDefault();
    const query = this._inputEl.value;
    if (this._suggester) this._suggester.success(query);
    this.hide();
    this._redirect(this._parseQuery(query).redirect);
  }

  _submitWithValue(value) {
    this._inputEl.value = value;
    this._submitForm();
  }
}

const queryParser = new QueryParser({
  commands: CONFIG.commands,
  pathDelimiter: CONFIG.pathDelimiter,
  searchDelimiter: CONFIG.searchDelimiter,
});

const influencers = CONFIG.influencers.map(influencerConfig => {
  return new {
    Default: DefaultInfluencer,
    DuckDuckGo: DuckDuckGoInfluencer,
    History: HistoryInfluencer,
  }[influencerConfig.name]({
    defaultSuggestions: CONFIG.defaultSuggestions,
    limit: influencerConfig.limit,
    parseQuery: queryParser.parse,
  });
});

const suggester = new Suggester({
  enabled: CONFIG.suggestions,
  influencers,
  limit: CONFIG.suggestionsLimit,
});

const help = new Help({
  commands: CONFIG.commands,
  newTab: CONFIG.newTab,
  suggester,
  reversedColors: CONFIG.reversedColors,
});

const form = new Form({
  colors: CONFIG.colors,
  instantRedirect: CONFIG.instantRedirect,
  newTab: CONFIG.newTab,
  parseQuery: queryParser.parse,
  suggester,
  toggleHelp: help.toggle,
  quickLaunch: help.launch,
  reversedColors: CONFIG.reversedColors,
});

new Clock({
  delimiter: CONFIG.clockDelimiter,
  toggleHelp: help.toggle,
  twentyFourHourClock: CONFIG.twentyFourHourClock,
});
