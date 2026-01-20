//=============================================================================
// Yanfly Engine Plugins - Message Core
// YEP_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MessageCore = true;

var Yanfly = Yanfly || {};
Yanfly.Message = Yanfly.Message || {};
Yanfly.Message.version = 1.19;

//=============================================================================
 /*:
 * @plugindesc YEP信息文本核心[v1.19]
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @text ---通用设置---
 * @default
 *
 * @param Default Rows
 * @text 默认行数
 * @parent ---General---
 * @type number
 * @min 0
 * @desc 消息框默认的行数
 * @default 4
 *
 * @param Default Width
 * @text 默认宽度
 * @parent ---General---
 * @desc 消息框的默认宽度（像素）
 * @default Graphics.boxWidth
 *
 * @param Face Indent
 * @text 头像缩进
 * @parent ---General---
 * @desc 如果使用头像图，文本缩进的像素值
 * Default: Window_Base._faceWidth + 24
 * @default Window_Base._faceWidth + 24
 *
 * @param Fast Forward Key
 * @text 快进键
 * @parent ---General---
 * @type combo
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc 用于快进消息的按键
 * @default pagedown
 *
 * @param Enable Fast Forward
 * @text 启用快进
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 默认是否启用消息快进按钮？
 * @default true
 *
 * @param Word Wrapping
 * @text 自动换行
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 默认是否启用自动换行
 * @default false
 *
 * @param Description Wrap
 * @text 描述换行
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否启用描述文本的自动换行
 * @default false
 *
 * @param Word Wrap Space
 * @text 换行空格
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 手动换行时是否插入空格
 * @default false
 *
 * @param Tight Wrap
 * @text 紧凑换行
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 如果为true且消息使用头像，消息换行将更紧凑
 * @default false
 *
 * @param ---Font---
 * @text ---字体设置---
 * @default
 *
 * @param Font Name
 * @text 字体名称
 * @parent ---Font---
 * @desc 消息窗口使用的默认字体
 * @default GameFont
 *
 * @param Font Name CH
 * @text 中文字体名称
 * @parent ---Font---
 * @desc 消息窗口使用的默认中文字体
SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Font Name KR
 * @text 韩文字体名称
 * @parent ---Font---
 * @desc 消息窗口使用的默认韩文字体
Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Font Size
 * @text 字体大小
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 消息窗口使用的默认字体大小
 * @default 28
 *
 * @param Font Size Change
 * @text 字体大小变化量
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 当使用\{和\}时，字体大小的调整量
 * @default 12
 *
 * @param Font Changed Max
 * @text 最大字体大小
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 使用\{可达到的最大字体大小
 * Default: 96
 * @default 96
 *
 * @param Font Changed Min
 * @text 最小字体大小
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 使用\}可达到的最小字体大小
 * Default: 12
 * @default 12
 *
 * @param Font Outline
 * @text 字体描边
 * @parent ---Font---
 * @type number
 * @min 0
 * @desc 消息字体的默认描边宽度
 * Default: 4
 * @default 4
 *
 * @param Maintain Font
 * @text 保持字体设置
 * @parent ---Font---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 改变字体名称或大小时，是否对后续消息保持生效
 * @default false
 *
 * @param ---Name Box---
 * @text ---姓名框设置---
 * @default
 *
 * @param Name Box Buffer X
 * @text 姓名框X偏移
 * @parent ---Name Box---
 * @type number
 * @desc 姓名框X位置的偏移量
 * @default -28
 *
 * @param Name Box Buffer Y
 * @text 姓名框Y偏移
 * @parent ---Name Box---
 * @type number
 * @desc 姓名框Y位置的偏移量
 * @default 0
 *
 * @param Name Box Padding
 * @text 姓名框内边距
 * @parent ---Name Box---
 * @desc 姓名框的内边距值
 * @default this.standardPadding() * 4
 *
 * @param Name Box Color
 * @text 姓名框文字颜色
 * @parent ---Name Box---
 * @type number
 * @min 0
 * @max 31
 * @desc 姓名框中文字的颜色
 * @default 0
 *
 * @param Name Box Clear
 * @text 姓名框透明
 * @parent ---Name Box---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否希望姓名框窗口是透明
 * @default false
 *
 * @param Name Box Added Text
 * @text 姓名框附加文本
 * @parent ---Name Box---
 * @desc 每当使用姓名框时，总会添加的文本
 * 可用于自动设置颜色等
 * @default \c[6]
 *
 * @param Name Box Auto Close
 * @text 姓名框自动关闭
 * @parent ---Name Box---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 每次姓名框显示不同姓名时，是否关闭消息窗口
 * @default false
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 虽然RPG Maker MV Ace在消息系统上有了很大改进，但添加一些额外功能也无妨，
 * 例如姓名窗口、通过文本代码快速显示物品、武器、防具的图标和/或名称等。
 * 这个脚本还让开发者能够在游戏中调整消息窗口的大小，为其设置单独的字体，
 * 并为玩家提供文本快进功能
 *
 * ============================================================================
 * 自动换行
 * ============================================================================
 *
 *  消息系统现在支持自动换行。你可以使用插件命令启用和禁用自动换行。
 * 使用自动换行时，如果单词将超出消息窗口的范围，它将自动转到下一行。
 * 也就是说，自动换行将禁用编辑器的换行，需要使用插件提供的换行方式：
 *
 * <br>或<line break>是用于换行的文本代码。在你希望开始新行的部分之前或之后使用
 *
 * 请记住，自动换行主要用于消息窗口。但是，在其他你希望看到自动换行的地方
 * 例如物品描述，在文本开头插入<WordWrap>即可启用
 *
 * ============================================================================
 * 文本代码
 * ============================================================================
 *
 * 在消息中使用特定的文本代码，游戏会将其替换为以下内容：
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
文本代码   功能
\V[n]       替换为第n个变量的值。
\N[n]       替换为第n个演员的名称。
\P[n]       替换为第n个队员的名称。
\G          替换为货币单位。
\C[n]       后续文本使用第n种颜色。
\I[n]       显示第n个图标。
\{          增加文本大小一级。
\}          减小文本大小一级。
\\          替换为反斜杠字符。
\$          打开金钱窗口。
\.          等待1/4秒。
\|          等待1秒。
\!          等待按钮输入。
\>          同一行剩余文本一次性显示。
\<          取消文本一次性显示的效果。
\^          显示文本后不等待输入。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
等待:       效果:
\w[x]     - 等待x帧（60帧=1秒）。仅消息窗口可用。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
姓名窗口: 效果:
\n<x>     - 创建显示x字符串的姓名框 左侧
\nc<x>    - 创建显示x字符串的姓名框 居中
\nr<x>    - 创建显示x字符串的姓名框 右侧
 *
 *              *注：仅消息窗口可用。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
换行      效果:
<br>      - 如果使用自动换行模式，这将导致换行。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
位置:      效果:
\px[x]    - 将文本x位置设置为x。
\py[x]    - 将文本y位置设置为y。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
描边:      效果:
\oc[x]    - 将描边颜色设置为x。
\ow[x]    - 将描边宽度设置为x。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
字体:      效果:
\fr       - 重置所有字体更改。
\fs[x]    - 将字体大小更改为x。
\fn<x>    - 将字体名称更改为x。
\fb       - 切换字体粗体。
\fi       - 切换字体斜体。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
角色:      效果:
\af[x]    - 显示第x个角色的头像。*注
\ac[x]    - 显示角色的职业名称。
\an[x]    - 显示角色的昵称。
 *
 *              *注：仅消息窗口可用。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
队伍:      效果:
\pf[x]    - 显示第x个队员的头像。*注
\pc[x]    - 显示第x个队员的职业名称。
\pn[x]    - 显示第x个队员的昵称。
 *
 *              *注：仅消息窗口可用。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
名称:      效果:
\nc[x]    - 显示第x个职业的名称。
\ni[x]    - 显示第x个物品的名称。
\nw[x]    - 显示第x个武器的名称。
\na[x]    - 显示第x个防具的名称。
\ns[x]    - 显示第x个技能的名称。
\nt[x]    - 显示第x个状态的名称。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
带图标名称: 效果:
\ii[x]    - 显示第x个物品的名称及图标。
\iw[x]    - 显示第x个武器的名称及图标。
\ia[x]    - 显示第x个防具的名称及图标。
\is[x]    - 显示第x个技能的名称及图标。
\it[x]    - 显示第x个状态的名称及图标。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * 以上是本脚本添加的文本代码。请记住，其中一些文本代码仅适用于消息窗口。
 * 否则，它们将适用于帮助描述、演员传记等。
 *
 * ============================================================================
 * 插件命令
 * ============================================================================
 *
 * 以下是一些可通过事件编辑器使用的插件命令，用于更改消息系统的各个方面
 *
 * 插件命令
MessageRows 6
 *   - 将显示的消息行数更改为6。如果使用连续的显示文本事件，
 *   这将继续显示下一行的文本，直到达到行限制。超出部分将被截断，
 *   直到下一条消息开始，以避免意外重叠。
 *
MessageWidth 400
 *   - 将消息窗口宽度更改为400像素。这将截断显示在右侧过远的任何单词，
 *   因此请相应调整！
 *
EnableWordWrap
 *   - 启用自动换行。如果单词超出窗口大小，它将自动移到下一行。
 *   请记住，需要使用<br>进行换行。
 *
DisableWordWrap
 *   - 禁用自动换行  换行将在编辑器中开始新行的位置自动进行。
 *
EnableFastForward
 *   - 启用快进键对消息生效。
 *
DisableFastForward
 *   - 禁用快进键对消息生效。
 *
 * ============================================================================
 * 更新日志
 * ============================================================================
 *
 * 版本1.19：
 * - 针对RPG Maker MV 1.5.0版本更新。
 *
 * 版本1.18：
 * - 新增插件参数：'中文字体名称'和'韩文字体名称'。
 *
 * 版本1.17：
 * - 与消息宏插件在'姓名框自动关闭'选项上进行兼容性更新。
 *
 * 版本1.16：
 * - 新增'紧凑换行'插件参数作为自动换行选项，当使用头像时使自动换行更紧凑。
 *
 * 版本1.15：
 * - 增加了一个安全机制，如果姓名框窗口将超出屏幕，它将自动重新定位到主消息窗口下方。
 *
 * 版本1.14：
 * - 新增'姓名框关闭'插件参数。如果启用，消息窗口将在每次后续消息出现时检查姓名窗口的说话人。
 * 如果当前姓名窗口中的姓名与下一个姓名窗口中的姓名匹配，消息窗口将保持打开状态。
 * 如果不匹配，姓名窗口将关闭并重新打开，以指示新的说话人。
 *
 * 版本1.13：
 * - 在字体类别下新增'保持字体设置'插件参数。这允许你使用文本代码\fn<x>和\fs[x]
 * 永久更改消息的字体，直到再次使用它们。\fr将把它们重置为插件的默认参数设置。
 *
 * 版本1.12：
 * - '换行空格'参数不再在每条消息的开头留下空格。
 *
 * 版本1.11：
 * - 为插件参数添加了'字体描边'参数。这仅调整消息字体默认使用的字体描边宽度。
 *
 * 版本1.10：
 * - 针对扩展消息包1的自动调整大小功能更新了消息行系统，以支持扩展高度。
 *
 * 版本1.09：
 * - 用'快进键'参数和'启用快进'参数替换了'快进'参数。添加了两个新的插件命令：
 * 'EnableFastForward'和'DisableFastForward'，用于控制何时允许快进，
 * 以免导致定时过场动画不同步。
 *
 * 版本1.08：
 * - 修复了消息窗口位置在中间时输入数字的定位错误。
 *
 * 版本1.07：
 * - 为自动换行用户新增'换行空格'。此参数将为那些希望留下空格的人留下一个空格。
 *
 * 版本1.06：
 * - 修复了导致移动设备上遮罩问题的错误。
 *
 * 版本1.05：
 * - 修复了导致姓名框窗口显示变形的错误。
 *
 * 版本1.04：
 * - 修复了捕获过多姓名框窗口文本代码的错误。
 * - 使姓名窗口的关闭速度与主窗口的关闭速度同步。
 *
 * 版本1.03：
 * - 修复了与文本代码相关的自动换行错误。
 * - 修复了字体重置、斜体和粗体文本代码的错误。
 *
 * 版本1.02：
 * - 姓名框窗口的重叠功能（每个MV窗口都有）现已禁用，以允许与主消息窗口重叠。
 * - 更新了分支选择、数字输入和物品选择窗口的位置。
 *
 * 版本1.01：
 * - 在参数中添加了'描述换行'，允许所有物品描述自动处理换行。
 *
 * 版本1.00：
 * - 插件完成！
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MessageCore');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MSGDefaultRows = String(Yanfly.Parameters['Default Rows']);
Yanfly.Param.MSGDefaultWidth = String(Yanfly.Parameters['Default Width']);
Yanfly.Param.MSGFaceIndent = String(Yanfly.Parameters['Face Indent']);
Yanfly.Param.MSGFastForwardKey = String(Yanfly.Parameters['Fast Forward Key']);
Yanfly.Param.MSGFFOn = eval(String(Yanfly.Parameters['Enable Fast Forward']));
Yanfly.Param.MSGWordWrap = String(Yanfly.Parameters['Word Wrapping']);
Yanfly.Param.MSGWordWrap = eval(Yanfly.Param.MSGWordWrap);
Yanfly.Param.MSGDescWrap = String(Yanfly.Parameters['Description Wrap']);
Yanfly.Param.MSGWrapSpace = eval(String(Yanfly.Parameters['Word Wrap Space']));
Yanfly.Param.MSGTightWrap = eval(String(Yanfly.Parameters['Tight Wrap']));

Yanfly.Param.MSGFontName = String(Yanfly.Parameters['Font Name']);
Yanfly.Param.MSGCNFontName = String(Yanfly.Parameters['Font Name CH']);
Yanfly.Param.MSGKRFontName = String(Yanfly.Parameters['Font Name KR']);
Yanfly.Param.MSGFontSize = Number(Yanfly.Parameters['Font Size']);
Yanfly.Param.MSGFontSizeChange = String(Yanfly.Parameters['Font Size Change']);
Yanfly.Param.MSGFontChangeMax = String(Yanfly.Parameters['Font Changed Max']);
Yanfly.Param.MSGFontChangeMin = String(Yanfly.Parameters['Font Changed Min']);
Yanfly.Param.MSGFontOutline = Number(Yanfly.Parameters['Font Outline']);
Yanfly.Param.MSGFontMaintain = eval(String(Yanfly.Parameters['Maintain Font']));

Yanfly.Param.MSGNameBoxBufferX = String(Yanfly.Parameters['Name Box Buffer X']);
Yanfly.Param.MSGNameBoxBufferY = String(Yanfly.Parameters['Name Box Buffer Y']);
Yanfly.Param.MSGNameBoxPadding = String(Yanfly.Parameters['Name Box Padding']);
Yanfly.Param.MSGNameBoxColor = Number(Yanfly.Parameters['Name Box Color']);
Yanfly.Param.MSGNameBoxClear = String(Yanfly.Parameters['Name Box Clear']);
Yanfly.Param.MSGNameBoxText = String(Yanfly.Parameters['Name Box Added Text']);
Yanfly.Param.MSGNameBoxClose = String(Yanfly.Parameters['Name Box Auto Close']);
Yanfly.Param.MSGNameBoxClose = eval(Yanfly.Param.MSGNameBoxClose);

//=============================================================================
// Bitmap
//=============================================================================

Yanfly.Message.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
    Yanfly.Message.Bitmap_initialize.call(this, width, height);
    this.fontBold = false;
};

Yanfly.Message.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
Bitmap.prototype._makeFontNameText = function() {
    if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
    return Yanfly.Message.Bitmap_makeFontNameText.call(this);
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.Message.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.Message.Game_System_initialize.call(this);
    this.initMessageSystem();
    this.initMessageFontSettings();
};

Game_System.prototype.initMessageSystem = function() {
    this._wordWrap = Yanfly.Param.MSGWordWrap;
    this._fastForward = Yanfly.Param.MSGFFOn;
};

Game_System.prototype.initMessageFontSettings = function() {
    if ($dataSystem.locale.match(/^zh/)) {
      this._msgFontName = Yanfly.Param.MSGCNFontName;
    } else if ($dataSystem.locale.match(/^ko/)) {
      this._msgFontName = Yanfly.Param.MSGKRFontName;
    } else {
      this._msgFontName = Yanfly.Param.MSGFontName;
    }
    this._msgFontSize = Yanfly.Param.MSGFontSize;
    this._msgFontOutline = Yanfly.Param.MSGFontOutline;
};

Game_System.prototype.messageRows = function() {
    var rows = eval(this._messageRows) || eval(Yanfly.Param.MSGDefaultRows);
    return Math.max(1, Number(rows));
};

Game_System.prototype.messageWidth = function() {
    return eval(this._messageWidth) || eval(Yanfly.Param.MSGDefaultWidth);
};

Game_System.prototype.wordWrap = function() {
    if (this._wordWrap === undefined) this.initMessageSystem();
    return this._wordWrap;
};

Game_System.prototype.setWordWrap = function(state) {
    if (this._wordWrap === undefined) this.initMessageSystem();
    this._wordWrap = state;
};

Game_System.prototype.isFastFowardEnabled = function() {
    if (this._fastForward === undefined) this.initMessageSystem();
    return this._fastForward;
};

Game_System.prototype.setFastFoward = function(state) {
    if (this._fastForward === undefined) this.initMessageSystem();
    this._fastForward = state;
};

Game_System.prototype.getMessageFontName = function() {
    if (this._msgFontName === undefined) this.initMessageFontSettings();
    return this._msgFontName;
};

Game_System.prototype.setMessageFontName = function(value) {
    if (this._msgFontName === undefined) this.initMessageFontSettings();
    this._msgFontName = value;
};

Game_System.prototype.getMessageFontSize = function() {
    if (this._msgFontSize === undefined) this.initMessageFontSettings();
    return this._msgFontSize;
};

Game_System.prototype.setMessageFontSize = function(value) {
    if (this._msgFontSize === undefined) this.initMessageFontSettings();
    this._msgFontSize = value;
};

Game_System.prototype.getMessageFontOutline = function() {
    if (this._msgFontOutline === undefined) this.initMessageFontSettings();
    return this._msgFontOutline;
};

Game_System.prototype.setMessageFontOutline = function(value) {
    if (this._msgFontOutline === undefined) this.initMessageFontSettings();
    this._msgFontOutline = value;
};

//=============================================================================
// Game_Message
//=============================================================================

Game_Message.prototype.addText = function(text) {
    if ($gameSystem.wordWrap()) text = '<WordWrap>' + text;
    this.add(text);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Message.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Message.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'MessageRows') $gameSystem._messageRows = args[0];
    if (command === 'MessageWidth') $gameSystem._messageWidth = args[0];
    if (command === 'EnableWordWrap') $gameSystem.setWordWrap(true);
    if (command === 'DisableWordWrap') $gameSystem.setWordWrap(false);
    if (command === 'EnableFastForward') $gameSystem.setFastFoward(true);
    if (command === 'DisableFastForward') $gameSystem.setFastFoward(false);
};

Game_Interpreter.prototype.command101 = function() {
    if (!$gameMessage.isBusy()) {
      $gameMessage.setFaceImage(this._params[0], this._params[1]);
      $gameMessage.setBackground(this._params[2]);
      $gameMessage.setPositionType(this._params[3]);
      while (this.isContinueMessageString()) {
        this._index++;
        if (this._list[this._index].code === 401) {
          $gameMessage.addText(this.currentCommand().parameters[0]);
        }
        if ($gameMessage._texts.length >= $gameSystem.messageRows()) break;
      }
      switch (this.nextEventCode()) {
      case 102:
        this._index++;
        this.setupChoices(this.currentCommand().parameters);
        break;
      case 103:
        this._index++;
        this.setupNumInput(this.currentCommand().parameters);
        break;
      case 104:
        this._index++;
        this.setupItemChoice(this.currentCommand().parameters);
        break;
      }
      this._index++;
      this.setWaitMode('message');
    }
    return false;
};

Game_Interpreter.prototype.isContinueMessageString = function() {
    if (this.nextEventCode() === 101 && $gameSystem.messageRows() > 4) {
      return true;
    } else {
      return this.nextEventCode() === 401;
    }
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.Message.Window_Base_resetFontSettings =
    Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    Yanfly.Message.Window_Base_resetFontSettings.call(this);
    this.contents.fontBold = false;
    this.contents.fontItalic = false;
    this.contents.outlineColor = 'rgba(0, 0, 0, 0.5)';
    this.contents.outlineWidth = $gameSystem.getMessageFontOutline();
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

Yanfly.Message.Window_Base_convertEscapeCharacters =
    Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = this.setWordWrap(text);
    text = Yanfly.Message.Window_Base_convertEscapeCharacters.call(this, text);
    text = this.convertExtraEscapeCharacters(text);
    return text;
};

Window_Base.prototype.setWordWrap = function(text) {
    this._wordWrap = false;
    if (text.match(/<(?:WordWrap)>/i)) {
      this._wordWrap = true;
      text = text.replace(/<(?:WordWrap)>/gi, '');
    }
    if (this._wordWrap) {
      var replace = Yanfly.Param.MSGWrapSpace ? ' ' : '';
      text = text.replace(/[\n\r]+/g, replace);
    }
    if (this._wordWrap) {
      text = text.replace(/<(?:BR|line break)>/gi, '\n');
    } else {
      text = text.replace(/<(?:BR|line break)>/gi, '');
    }
    return text;
};

Window_Base.prototype.convertExtraEscapeCharacters = function(text) {
    // Font Codes
    text = text.replace(/\x1bFR/gi, '\x1bMSGCORE[0]');
    text = text.replace(/\x1bFB/gi, '\x1bMSGCORE[1]');
    text = text.replace(/\x1bFI/gi, '\x1bMSGCORE[2]');
    // \AC[n]
    text = text.replace(/\x1bAC\[(\d+)\]/gi, function() {
        return this.actorClassName(parseInt(arguments[1]));
    }.bind(this));
    // \AN[n]
    text = text.replace(/\x1bAN\[(\d+)\]/gi, function() {
        return this.actorNickname(parseInt(arguments[1]));
    }.bind(this));
    // \PC[n]
    text = text.replace(/\x1bPC\[(\d+)\]/gi, function() {
        return this.partyClassName(parseInt(arguments[1]));
    }.bind(this));
    // \PN[n]
    text = text.replace(/\x1bPN\[(\d+)\]/gi, function() {
        return this.partyNickname(parseInt(arguments[1]));
    }.bind(this));
    // \NC[n]
    text = text.replace(/\x1bNC\[(\d+)\]/gi, function() {
        return $dataClasses[parseInt(arguments[1])].name;
    }.bind(this));
    // \NI[n]
    text = text.replace(/\x1bNI\[(\d+)\]/gi, function() {
        return $dataItems[parseInt(arguments[1])].name;
    }.bind(this));
    // \NW[n]
    text = text.replace(/\x1bNW\[(\d+)\]/gi, function() {
        return $dataWeapons[parseInt(arguments[1])].name;
    }.bind(this));
    // \NA[n]
    text = text.replace(/\x1bNA\[(\d+)\]/gi, function() {
        return $dataArmors[parseInt(arguments[1])].name;
    }.bind(this));
    // \NE[n]
    text = text.replace(/\x1bNE\[(\d+)\]/gi, function() {
        return $dataEnemies[parseInt(arguments[1])].name;
    }.bind(this));
    // \NS[n]
    text = text.replace(/\x1bNS\[(\d+)\]/gi, function() {
        return $dataSkills[parseInt(arguments[1])].name;
    }.bind(this));
    // \NT[n]
    text = text.replace(/\x1bNT\[(\d+)\]/gi, function() {
        return $dataStates[parseInt(arguments[1])].name;
    }.bind(this));
    // \II[n]
    text = text.replace(/\x1bII\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataItems);
    }.bind(this));
    // \IW[n]
    text = text.replace(/\x1bIW\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataWeapons);
    }.bind(this));
    // \IA[n]
    text = text.replace(/\x1bIA\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataArmors);
    }.bind(this));
    // \IS[n]
    text = text.replace(/\x1bIS\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataSkills);
    }.bind(this));
    // \IT[n]
    text = text.replace(/\x1bIT\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataStates);
    }.bind(this));
    // Finish
    return text;
};

Window_Base.prototype.actorClassName = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.currentClass().name : '';
};

Window_Base.prototype.actorNickname = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.nickname() : '';
};

Window_Base.prototype.partyClassName = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.currentClass().name : '';
};

Window_Base.prototype.partyNickname = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.nickname() : '';
};

Window_Base.prototype.escapeIconItem = function(n, database) {
    return '\x1bI[' + database[n].iconIndex + ']' + database[n].name;
};

Window_Base.prototype.obtainEscapeString = function(textState) {
    var arr = /^\<(.*?)\>/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return String(arr[0].slice(1, arr[0].length - 1));
    } else {
        return '';
    }
};

Yanfly.Message.Window_Base_processEscapeCharacter =
    Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
  switch (code) {
  case 'MSGCORE':
    var id = this.obtainEscapeParam(textState);
    if (id === 0) {
      $gameSystem.initMessageFontSettings();
      this.resetFontSettings();
    }
    if (id === 1) this.contents.fontBold = !this.contents.fontBold;
    if (id === 2) this.contents.fontItalic = !this.contents.fontItalic;
    break;
  case 'FS':
    var size = this.obtainEscapeParam(textState);
    this.contents.fontSize = size;
    if (Yanfly.Param.MSGFontMaintain) $gameSystem.setMessageFontSize(size);
    break;
  case 'FN':
    var name = this.obtainEscapeString(textState);
    this.contents.fontFace = name;
    if (Yanfly.Param.MSGFontMaintain) $gameSystem.setMessageFontName(name);
    break;
  case 'OC':
    var id = this.obtainEscapeParam(textState);
    this.contents.outlineColor = this.textColor(id);
    break;
  case 'OW':
    this.contents.outlineWidth = this.obtainEscapeParam(textState);
    break;
  case 'PX':
    textState.x = this.obtainEscapeParam(textState);
    break;
  case 'PY':
    textState.y = this.obtainEscapeParam(textState);
    break;
  default:
    Yanfly.Message.Window_Base_processEscapeCharacter.call(this,
     code, textState);
    break;
  }
};

Window_Base.prototype.makeFontBigger = function() {
    var size = this.contents.fontSize + eval(Yanfly.Param.MSGFontSizeChange);
    this.contents.fontSize = Math.min(size, Yanfly.Param.MSGFontChangeMax);
};

Window_Base.prototype.makeFontSmaller = function() {
  var size = this.contents.fontSize - eval(Yanfly.Param.MSGFontSizeChange);
  this.contents.fontSize = Math.max(size, Yanfly.Param.MSGFontChangeMin);
};

Yanfly.Message.Window_Base_processNormalCharacter =
    Window_Base.prototype.processNormalCharacter;
Window_Base.prototype.processNormalCharacter = function(textState) {
    if (this.checkWordWrap(textState)) return this.processNewLine(textState);
    Yanfly.Message.Window_Base_processNormalCharacter.call(this, textState);
};

Window_Base.prototype.checkWordWrap = function(textState) {
    if (!textState) return false;
    if (!this._wordWrap) return false;
    if (textState.text[textState.index] === ' ') {
      var nextSpace = textState.text.indexOf(' ', textState.index + 1);
      var nextBreak = textState.text.indexOf('\n', textState.index + 1);
      if (nextSpace < 0) nextSpace = textState.text.length + 1;
      if (nextBreak > 0) nextSpace = Math.min(nextSpace, nextBreak);
      var word = textState.text.substring(textState.index, nextSpace);
      var size = this.textWidthExCheck(word);
    }
    return (size + textState.x > this.wordwrapWidth());
};

Window_Base.prototype.wordwrapWidth = function(){
  return this.contents.width;
};

Window_Base.prototype.saveCurrentWindowSettings = function(){
    this._saveFontFace = this.contents.fontFace;
    this._saveFontSize = this.contents.fontSize;
    this._savetextColor = this.contents.textColor;
    this._saveFontBold = this.contents.fontBold;
    this._saveFontItalic = this.contents.fontItalic;
    this._saveOutlineColor = this.contents.outlineColor;
    this._saveOutlineWidth = this.contents.outlineWidth;
};

Window_Base.prototype.restoreCurrentWindowSettings = function(){
    this.contents.fontFace = this._saveFontFace;
    this.contents.fontSize = this._saveFontSize;
    this.contents.textColor = this._savetextColor;
    this.contents.fontBold = this._saveFontBold;
    this.contents.fontItalic = this._saveFontItalic;
    this.contents.outlineColor = this._saveOutlineColor;
    this.contents.outlineWidth = this._saveOutlineWidth;
};

Window_Base.prototype.clearCurrentWindowSettings = function(){
    this._saveFontFace = undefined;
    this._saveFontSize = undefined;
    this._savetextColor = undefined;
    this._saveFontBold = undefined;
    this._saveFontItalic = undefined;
    this._saveOutlineColor = undefined;
    this._saveOutlineWidth = undefined;
};

Window_Base.prototype.textWidthExCheck = function(text) {
    var setting = this._wordWrap;
    this._wordWrap = false;
    this.saveCurrentWindowSettings();
    this._checkWordWrapMode = true;
    var value = this.drawTextEx(text, 0, this.contents.height);
    this._checkWordWrapMode = false;
    this.restoreCurrentWindowSettings();
    this.clearCurrentWindowSettings();
    this._wordWrap = setting;
    return value;
};

//=============================================================================
// Window_Help
//=============================================================================

Yanfly.Message.Window_Help_setItem = Window_Help.prototype.setItem;
Window_Help.prototype.setItem = function(item) {
    if (eval(Yanfly.Param.MSGDescWrap)) {
      this.setText(item ? '<WordWrap>' + item.description : '');
    } else {
      Yanfly.Message.Window_Help_setItem.call(this, item);
    }
};

//=============================================================================
// Window_ChoiceList
//=============================================================================

Window_ChoiceList.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_ChoiceList.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Yanfly.Message.Window_ChoiceList_updatePlacement =
    Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function() {
    Yanfly.Message.Window_ChoiceList_updatePlacement.call(this);
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = this._messageWindow.height;
    } else if (messagePosType === 2) {
      this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
    }
};

//=============================================================================
// Window_NumberInput
//=============================================================================

Yanfly.Message.Window_NumberInput_updatePlacement =
    Window_NumberInput.prototype.updatePlacement;
Window_NumberInput.prototype.updatePlacement = function() {
    Yanfly.Message.Window_NumberInput_updatePlacement.call(this);
    var messageY = this._messageWindow.y;
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = this._messageWindow.height;
    } else if (messagePosType === 1) {
      if (messageY >= Graphics.boxHeight / 2) {
          this.y = messageY - this.height;
      } else {
          this.y = messageY + this._messageWindow.height;
      }
    } else if (messagePosType === 2) {
      this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
    }
};

//=============================================================================
// Window_EventItem
//=============================================================================

Yanfly.Message.Window_EventItem_updatePlacement =
    Window_EventItem.prototype.updatePlacement;
Window_EventItem.prototype.updatePlacement = function() {
    Yanfly.Message.Window_EventItem_updatePlacement.call(this);
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = Graphics.boxHeight - this.height;
    } else if (messagePosType === 2) {
      this.y = 0;
    }
};

//=============================================================================
// Window_ScrollText
//=============================================================================

Window_ScrollText.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_ScrollText.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

//=============================================================================
// Window_NameBox
//=============================================================================

Yanfly.DisableWebGLMask = false;

function Window_NameBox() {
    this.initialize.apply(this, arguments);
}

Window_NameBox.prototype = Object.create(Window_Base.prototype);
Window_NameBox.prototype.constructor = Window_NameBox;

Window_NameBox.prototype.initialize = function(parentWindow) {
    this._parentWindow = parentWindow;
    Window_Base.prototype.initialize.call(this, 0, 0, 240, this.windowHeight());
    this._text = '';
    this._lastNameText = '';
    this._openness = 0;
    this._closeCounter = 0;
    this.deactivate();
    if (eval(Yanfly.Param.MSGNameBoxClear)) {
      this.backOpacity = 0;
      this.opacity = 0;
    }
    this.hide();
};

Window_NameBox.prototype.windowWidth = function() {
    this.resetFontSettings();
    var dw = this.textWidthEx(this._text);
    dw += this.padding * 2;
    var width = dw + eval(Yanfly.Param.MSGNameBoxPadding)
    return Math.ceil(width);
};

Window_NameBox.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

Window_NameBox.prototype.calcNormalCharacter = function(textState) {
    return this.textWidth(textState.text[textState.index++]);
};

Window_NameBox.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_NameBox.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_NameBox.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Window_NameBox.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active) return;
    if (this.isClosed()) return;
    if (this.isClosing()) return;
    if (this._closeCounter-- > 0) return;
    if (this._parentWindow.isClosing()) {
      this._openness = this._parentWindow.openness;
    }
    this.close();
};

Window_NameBox.prototype.refresh = function(text, position) {
    this.show();
    this._lastNameText = text;
    this._text = Yanfly.Param.MSGNameBoxText + text;
    this._position = position;
    this.width = this.windowWidth();
    this.createContents();
    this.contents.clear();
    this.resetFontSettings();
    this.changeTextColor(this.textColor(Yanfly.Param.MSGNameBoxColor));
    var padding = eval(Yanfly.Param.MSGNameBoxPadding) / 2;
    this.drawTextEx(this._text, padding, 0, this.contents.width);
    this._parentWindow.adjustWindowSettings();
    this._parentWindow.updatePlacement();
    this.adjustPositionX();
    this.adjustPositionY();
    this.open();
    this.activate();
    this._closeCounter = 4;
    return '';
};

Window_NameBox.prototype.adjustPositionX = function() {
    if (this._position === 1) {
      this.x = this._parentWindow.x;
      this.x += eval(Yanfly.Param.MSGNameBoxBufferX);
    } else if (this._position === 2) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 3 / 10;
      this.x -= this.width / 2;
    } else if (this._position === 3) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width / 2;
      this.x -= this.width / 2;
    } else if (this._position === 4) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 7 / 10;
      this.x -= this.width / 2;
    } else {
      this.x = this._parentWindow.x + this._parentWindow.width;
      this.x -= this.width;
      this.x -= eval(Yanfly.Param.MSGNameBoxBufferX);
    }
    this.x = this.x.clamp(0, Graphics.boxWidth - this.width);
};

Window_NameBox.prototype.adjustPositionY = function() {
    if ($gameMessage.positionType() === 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    } else {
      this.y = this._parentWindow.y;
      this.y -= this.height;
      this.y += eval(Yanfly.Param.MSGNameBoxBufferY);
    }
    if (this.y < 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    }
};

//=============================================================================
// Window_Message
//=============================================================================

Yanfly.Message.Window_Message_createSubWindows =
    Window_Message.prototype.createSubWindows;
Window_Message.prototype.createSubWindows = function() {
    Yanfly.Message.Window_Message_createSubWindows.call(this);
    this._nameWindow = new Window_NameBox(this);
    Yanfly.nameWindow = this._nameWindow;
    var scene = SceneManager._scene;
    scene.addChild(this._nameWindow);
};

Window_Message.prototype.numVisibleRows = function() {
    return $gameSystem.messageRows();
};

Window_Message.prototype.windowWidth = function() {
    return $gameSystem.messageWidth();
};

Window_Message.prototype.wordwrapWidth = function(){
  if (Yanfly.Param.MSGTightWrap && $gameMessage.faceName() !== '') {
    return this.contents.width - this.newLineX();
  }
  return Window_Base.prototype.wordwrapWidth.call(this);
};

Window_Message.prototype.adjustWindowSettings = function() {
    this.width = this.windowWidth();
    this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
    if (Math.abs(Graphics.boxHeight - this.height) < this.lineHeight()) {
      this.height = Graphics.boxHeight;
    }
    this.createContents();
    this.x = (Graphics.boxWidth - this.width) / 2;
};

Yanfly.Message.Window_Message_startMessage =
    Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_startMessage.call(this);
};

Yanfly.Message.Window_Message_terminateMessage =
    Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_terminateMessage.call(this);
};

Yanfly.Message.Window_Message_newPage =
    Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
    this.adjustWindowSettings();
    Yanfly.Message.Window_Message_newPage.call(this, textState);
};

Window_Message.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_Message.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Window_Message.prototype.newLineX = function() {
    if ($gameMessage.faceName() === '') {
      return 0;
    } else {
      return eval(Yanfly.Param.MSGFaceIndent);
    }
};

Window_Message.prototype.isFastForward = function() {
    if (!$gameSystem.isFastFowardEnabled()) return false;
    return Input.isPressed(Yanfly.Param.MSGFastForwardKey);
};

Yanfly.Message.Window_Message_updateInput =
    Window_Message.prototype.updateInput;
Window_Message.prototype.updateInput = function() {
    if (this.pause && this.isFastForward()) {
      if (!this._textState) {
        this.pause = false;
        this.terminateMessage();
      }
    }
    return Yanfly.Message.Window_Message_updateInput.call(this);
};

Yanfly.Message.Window_Message_updateShowFast =
    Window_Message.prototype.updateShowFast;
Window_Message.prototype.updateShowFast = function() {
    if (this.isFastForward()) this._showFast = true;
    Yanfly.Message.Window_Message_updateShowFast.call(this);
};

Yanfly.Message.Window_Message_updateWait =
    Window_Message.prototype.updateWait;
Window_Message.prototype.updateWait = function() {
    if (this.isFastForward()) return false;
    return Yanfly.Message.Window_Message_updateWait.call(this);
};

Yanfly.Message.Window_Message_startWait =
    Window_Message.prototype.startWait;
Window_Message.prototype.startWait = function(count) {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startWait.call(this, count);
    if (this.isFastForward()) this._waitCount = 0;
};

Yanfly.Message.Window_Message_startPause =
    Window_Message.prototype.startPause;
Window_Message.prototype.startPause = function() {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startPause.call(this);
};

Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = Window_Base.prototype.convertEscapeCharacters.call(this, text);
    text = this.convertNameBox(text);
    text = this.convertMessageCharacters(text);
    return text;
};

Window_Message.prototype.convertNameBox = function(text) {
    text = text.replace(/\x1bN\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN1\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN2\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 2);
    }, this);
    text = text.replace(/\x1bN3\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bNC\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bN4\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 4);
    }, this);
    text = text.replace(/\x1bN5\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    text = text.replace(/\x1bNR\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    return text;
};

Window_Message.prototype.convertMessageCharacters = function(text) {
    text = text.replace(/\x1bAF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameActors.actor(i));
    }.bind(this));
    text = text.replace(/\x1bPF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameParty.members()[i - 1]);
    }.bind(this));
    return text;
};

Window_Message.prototype.convertActorFace = function(actor) {
    $gameMessage.setFaceImage(actor.faceName(), actor.faceIndex());
    return '';
};

Yanfly.Message.Window_Message_processEscapeCharacter =
    Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case '!':
      if (!this.isFastForward()) this.startPause();
      break;
    case 'W':
      this.startWait(this.obtainEscapeParam(textState));
    default:
      Yanfly.Message.Window_Message_processEscapeCharacter.call(this,
        code, textState);
      break;
    }
};

if (Yanfly.Param.MSGNameBoxClose) {

Yanfly.Message.Window_Message_doesContinue =
  Window_Message.prototype.doesContinue;
Window_Message.prototype.doesContinue = function() {
  var value = Yanfly.Message.Window_Message_doesContinue.call(this);
  if (!value) return false;
  if (this.hasDifferentNameBoxText()) {
    return false;
  }
  return true;
};

Window_Message.prototype.hasDifferentNameBoxText = function() {
  var texts = $gameMessage._texts;
  var length = texts.length;
  var open = this._nameWindow.isOpen();
  for (var i = 0; i < length; ++i) {
    var text = texts[i];
    if (text.length <= 0) continue;
    if (Yanfly.MsgMacro) {
      text = this.convertMacroText(text);
      text = text.replace(/\x1b/gi, '\\');
    }
    if (text.match(/\\(?:N|N1|N2|N3|N4|N5|NC|NR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    } else if (text.match(/\\(?:ND|ND1|ND2|ND3|ND4|ND5|NDC|NDR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    } else if (text.match(/\\(?:NT|NT1|NT2|NT3|NT4|NT5|NTC|NTR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    }
    if (name) {
      name = name.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\N\[(\d+)\]/gi, function() {
        return this.actorName(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\P\[(\d+)\]/gi, function() {
        return this.partyMemberName(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\/gi, '\x1b');
    }
    if (name && !open) return true;
    if (name && name !== this._nameWindow._lastNameText) {
      return true;
    }
  }
  if (open && !name) return true;
  return false;
};

} // Yanfly.Param.MSGNameBoxClose

//=============================================================================
// End of File
//=============================================================================
