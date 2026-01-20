//=============================================================================
// S_Itemscene_kz.js
//=============================================================================

/*:
 * @plugindesc 图文物品界面布局
 * @author Sairi [Twitter＠sairi55]
 * 
 * 
 * @param WItem X
 * @text 物品窗口 X
 * @desc 物品窗口的X显示位置
 * @default 326
 *
 * @param WItem Y
 * @text 物品窗口 Y
 * @desc 物品窗口的Y显示位置
 * @default 78 
 *
 * @param WItem Width
 * @text 物品窗口 宽度
 * @desc 物品窗口的宽度
 * @default 490 
 *
 * @param WItem Height
 * @text 物品窗口 高度
 * @desc 物品窗口的高度
 * @default 546  
 *
 * @param WcItem maxcols
 * @text 分类窗口 最大列数
 * @desc 分类窗口的横向最大项目数
 * @default 4  
 *
 * @param WcItem maxrows
 * @text 分类窗口 最大行数
 * @desc 分类窗口的纵向最大项目数
 * @default 0   
 *
 * @param WcItem X
 * @text 分类窗口 X
 * @desc 分类窗口的X显示位置
 * @default 0
 *
 * @param WcItem Y
 * @text 分类窗口 Y
 * @desc 分类窗口的Y显示位置
 * @default 0 
 *
 * @param WcItem Width
 * @text 分类窗口 宽度
 * @desc 分类窗口的宽度
 * @default 816    
 *
 * @param WcItem Height
 * @text 分类窗口 高度
 * @desc 分类窗口的高度
 * @default 78 
 * 
 * @param WinfoItem X
 * @text 说明窗口 X
 * @desc 说明窗口的X显示位置
 * @default 0
 *
 * @param WinfoItem Y
 * @text 说明窗口 Y
 * @desc 说明窗口的Y显示位置
 * @default 78 
 *
 * @param WinfoItem Width
 * @text 说明窗口 宽度
 * @desc 说明窗口的宽度
 * @default 326    
 *
 * @param WinfoItem Height
 * @text 说明窗口 高度
 * @desc 说明窗口的高度
 * @default 546 
 *
 * @param WinfoText X
 * @text 说明文本 X
 * @desc 说明窗口中显示的文本的X位置
 * @default 0 
 *
 * @param WinfoText Y
 * @text 说明文本 Y
 * @desc 说明窗口中显示的文本的Y位置
 * @default 400 
 *
 * @param WinfoGraphic X
 * @text 说明图片 X
 * @desc 说明窗口中显示的图片的X位置
 * @default 0 
 *
 * @param WinfoGraphic Y
 * @text 说明图片 Y
 * @desc 说明窗口中显示的图片的Y位置
 * @default 0   
 * 
 *
 * @help 
===========================================================================
  介绍
===========================================================================
   
  这个插件用于修改游戏中物品画面的布局

===========================================================================
  物品设置
===========================================================================
 
  图片准备：
  在游戏目录的img文件夹下创建名为dx的文件夹
  将需要在说明窗口中显示的物品图片放入该文件夹
 
 
  在物品的备注信息中添加以下内容：

<ill:图片文件名>
指定该物品在说明窗口中显示的图片（需放在img/dx/文件夹中）

<br:说明文字>
设置该物品的说明文本（可使用转义字符）

换行示例：
<br:可以恢复血量的药水
\C[3]+50\C[18] HP>

  
   汉化:云书

   注意事项
   -----------
   如果某物品没有准备对应的图片，可能会导致错误
   该插件没有插件命令，所有设置通过插件参数和物品备注完成
   与其他插件可能存在冲突，使用时需自行测试兼容性


 * 使用条款
   -----------
 * 不限可修改
 * 可以包含在游戏中重新分发
 * 
 * 不强求注明credits，但如果能写上我会很开心
 * 另外，如果能告诉我（使用情况）我会更开心
 * 以上请多关照
 */


(function() {

	
var parameters = PluginManager.parameters('S_Itemscene_kz');
var WItem_X = Number(parameters['WItem X'] || 326);
var WItem_Y = Number(parameters['WItem Y'] || 78);
var WItem_Width = Number(parameters['WItem Width'] || 490);
var WItem_Height = Number(parameters['WItem Height'] || 546);
var WcItem_X = Number(parameters['WcItem X'] || 0);
var WcItem_Y = Number(parameters['WcItem Y'] || 0);
var WcItem_maxcols = Number(parameters['WcItem maxcols'] || 7);
var WcItem_maxrows = Number(parameters['WcItem maxrows'] || 0);
var WcItem_Width = Number(parameters['WcItem Width'] || 816);
var WcItem_Height = Number(parameters['WcItem Height'] || 78);
var WinfoItem_X = Number(parameters['WinfoItem X'] || 0);
var WinfoItem_Y = Number(parameters['WinfoItem Y'] || 78);
var WinfoItem_Width = Number(parameters['WinfoItem Width'] || 326);
var WinfoItem_Height = Number(parameters['WinfoItem Height'] || 546);
var WinfoText_X = Number(parameters['WinfoText X'] || 0);
var WinfoText_Y = Number(parameters['WinfoText Y'] || 200);
var WinfoGraphic_X = Number(parameters['WinfoGraphic X'] || 60);
var WinfoGraphic_Y = Number(parameters['WinfoGraphic Y'] || 0);

ImageManager.loaddx = function(filename, hue) {
   return this.loadBitmap('img/dx/', filename, hue, false);
    
}

var kz_Scene_Item_prototype_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function() {
   console.log("something happened");
   kz_Scene_Item_prototype_create.call(this)
   if (this._helpWindow) {
       this._helpWindow.hide();
   }
   this.createInfoWindow();
   this.createActorWindow();
};

Scene_Item.prototype.createInfoWindow = function() {
   this._InfoWindow = new Window_Info();
   this.addWindow(this._InfoWindow);
};

var kz_Scene_Item_prototype_createCategoryWindow = Scene_Item.prototype.createCategoryWindow;
Scene_Item.prototype.createCategoryWindow = function() {
   kz_Scene_Item_prototype_createCategoryWindow.call(this);
   	this._categoryWindow.x = WcItem_X;
	this._categoryWindow.y = WcItem_Y;

};

//-------------------------------------------------------
　　//★カテゴリーウインドウに表示する種類の数（道具、貴重品等）
　　Window_ItemCategory.prototype.maxCols = function() {
 　     return WcItem_maxcols;
　　};
　　Window_ItemCategory.prototype.maxRows = function() {
 　     return WcItem_maxrows;
　　};
　　//★カテゴリーウインドウの幅と高さ
	Window_ItemCategory.prototype.windowWidth = function() {
　　return  WcItem_Width;　　
　　};
	Window_ItemCategory.prototype.windowHeight = function() {
　　return  WcItem_Height;　　
　　};
//-------------------------------------------------------

var kz_Scene_Item_prototype_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function() {
	//★アイテムウインドウ
	var wx = WItem_X;　
    var wy = WItem_Y;
	var ww = WItem_Width;
    var wh = WItem_Height;
    this._itemWindow = new Window_ItemList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
};

var _Scene_Item_update = Scene_Item.prototype.update;
Scene_Item.prototype.update = function() {
   _Scene_Item_update.call(this);

   if (this.item())//アイテムが見つからなかった場合を想定
   {
       this._InfoWindow.setText(this.item().meta.br, this.item().meta.ill);
   }
};


function Window_Info() {
   this.initialize.apply(this, arguments);
}

Window_Info.prototype = Object.create(Window_Base.prototype);
Window_Info.prototype.constructor = Window_Info;
Window_Info.prototype.initialize = function() {
//★ヘルプウィンドウ代わりのウインドウの設定
		var x = WinfoItem_X;
		var y = WinfoItem_Y;
	    var width = WinfoItem_Width;
	    var height = WinfoItem_Height;
   Window_Base.prototype.initialize.call(this, x, y, width, height);
};

Window_Info.prototype.loadImages = function() {
   if (this.item())
   {
       ImageManager.loaddx(this.item().meta.ill);
   }   
};

Window_Info.prototype.setText = function(str, ill) {
    this._text = str;
    this._ill = ill;
    this.refresh();
};
    
// ウィンドウに載せる内容
Window_Info.prototype.refresh = function() {
       this.contents.clear();
       var picHeight = this.drawPicture();

       x = WinfoText_X;          
       y = WinfoText_Y;
       this.drawTextEx(this._text, x, y);//エスケープ文字使用可能
};

        
Window_Info.prototype.drawPicture = function(x,y) {
   var bitmapName;
   x = WinfoGraphic_X;          
   y = WinfoGraphic_Y;
   if (this._ill){
       bitmapName = this._ill;
   }      
   var bitmap = bitmapName ? ImageManager.loaddx(bitmapName) : null;
   if (bitmap)
   {
       this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y);
       return bitmap.height + 60;
   }
   return 250;
}
})();

