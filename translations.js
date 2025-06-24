// 界面翻译
function getInterfaceTranslations() {
    return {
        "en": {
            "sengo2.name": "Sengo2 Vision Sensor",
            "sengo2.description": "Mainstream AI vision module, supporting QR code and face recognition with built-in learning, in a block shell."
        },
        "zh-cn": {
            "sengo2.name": "Sengo2 视觉传感器",
            "sengo2.description": "主流AI视觉模块，支持二维码人脸识别与片内自学习，积木外壳。"
        },
        "zh-tw": {
            "sengo2.name": "Sengo2 視覺傳感器",
            "sengo2.description": "主流AI視覺模塊，支持二維碼人臉識別與片內自學習，積木外殼。"
        }
    };
}

// 块翻译
function registerBlocksMessages(Blockly) {
    // 英文翻译
    Object.assign(Blockly.ScratchMsgs.locales["en"], {
        "SENGO2_CATEGORY": "Sengo2 Vision Sensor",
        "SENGO2_SETUP": "Setup Module",
        "SENGO2_RUN": "Run Module",
        "SENGO2_BEGIN": "Initialize  Sengo2  port %1 addr %2",
        "SENGO2_SET_DEFAULT": "Reset Sengo2 to default settings",
        "SENGO2_CAMERA_SET_AWB": "Set Sengo2 white balance mode %1",
        "SENGO2_LED_SET_COLOR": "Set  Sengo2  LEDs' color %1 when targets were detected otherwise %2 luma(1-15) %3",
        "SENGO2_VISION_SET": "Set  Sengo2  %1  algo %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Set  Sengo2  algo %1   %2 sets of params",
        "SENGO2_VISION_COLOR_PARAM": "Set  Sengo2  algo Color  x-coord %1 y-coord %2 width %3 height %4 paramset %5",
        "SENGO2_VISION_BLOB_PARAM": "Set  Sengo2  algo Blob  min-width %1 min-height %2 color %3 paramset %4",
        "SENGO2_VISION_GENERAL_PARAM": "Set Sengo2 %1 param1 %2 param2 %3 param3 %4 param4 %5 param5 %6 paramset %7",
        "SENGO2_VISION_BLOB_MAX": "Set  Sengo2  algo Blob  max num of blobs for each color(1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Set  Sengo2  algo AprilTag  standard %1",
        "SENGO2_VISION_LINE_MAX": "Set  Sengo2  algo Line  max num of lines(1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Set  Sengo2  algo %1  %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "  Sengo2  algo %1  num of results",
        "SENGO2_VISION_COLOR_VALUE": "  Sengo2  algo Color  %1 of result %2",
        "SENGO2_VISION_GET_VALUE": "  Sengo2  algo %1   %2 of result %3",
        "SENGO2_VISION_LINE_VALUE": "  Sengo2  algo Line   %1 of result %2",
        "SENGO2_VISION_QRCODE_VALUE": "  Sengo2  algo QrCode   %1 of result %2",
        "SENGO2_VISION_QRCODE_STRING": "  Sengo2  algo QrCode  string of decoding result",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2  algo Custom  %1 of result %2",
        "SENGO2_VISION_COLOR_LABEL": "  Sengo2  algo Color  recognized %1 result %2",
        "SENGO2_VISION_BLOB_LABEL": "  Sengo2  algo Blob  detected %1 blob result %2",
        "SENGO2_VISION_CARD_LABEL": "  Sengo2  algo Card  recognized %1 result %2",
        "SENGO2_VISION_CLASS20_LABEL": "  Sengo2  algo 20Class  recognized %1 result %2",
        
        // 状态
        "SENGO2_ENABLE": "run",
        "SENGO2_DISABLE": "stop",
        
        // 白平衡模式
        "SENGO2_AWB_AUTO": "Auto",
        "SENGO2_AWB_LOCK": "Lock",
        "SENGO2_AWB_WHITE_LIGHT": "WhiteLight",
        "SENGO2_AWB_YELLOW_LIGHT": "YellowLight",
        "SENGO2_AWB_CALIBRATE": "WhiteBalanceCalibrating",
        
        // 颜色
        "SENGO2_COLOR_BLACK": "Black",
        "SENGO2_COLOR_WHITE": "White",
        "SENGO2_COLOR_RED": "Red",
        "SENGO2_COLOR_GREEN": "Green",
        "SENGO2_COLOR_BLUE": "Blue",
        "SENGO2_COLOR_YELLOW": "Yellow",
        
        // LED颜色
        "SENGO2_LED_CLOSE": "Black",
        "SENGO2_LED_RED": "Red",
        "SENGO2_LED_GREEN": "Green",
        "SENGO2_LED_YELLOW": "Yellow",
        "SENGO2_LED_BLUE": "Blue",
        "SENGO2_LED_PURPLE": "Purple",
        "SENGO2_LED_CYAN": "Cyan",
        "SENGO2_LED_WHITE": "White",
        
        // 算法参数操作
        "SENGO2_OPERA_SAVE": "save data as",
        "SENGO2_OPERA_DELETE": "delete data",
        
        // 自定义数据
        "SENGO2_CUSTOM_VALUE1": "Value1",
        "SENGO2_CUSTOM_VALUE2": "Value2",
        "SENGO2_CUSTOM_VALUE3": "Value3",
        "SENGO2_CUSTOM_VALUE4": "Value4",
        "SENGO2_CUSTOM_VALUE5": "Value5",
        
        // 卡片标签
        "SENGO2_CARD_FORWARD": "Forward",
        "SENGO2_CARD_LEFT": "Left",
        "SENGO2_CARD_RIGHT": "Right",
        "SENGO2_CARD_TURN_AROUND": "Turn Around",
        "SENGO2_CARD_PARK": "Park",
        "SENGO2_CARD_GREEN_LIGHT": "Green Light",
        "SENGO2_CARD_RED_LIGHT": "Red Light",
        "SENGO2_CARD_SPEED40": "Speed 40",
        "SENGO2_CARD_SPEED60": "Speed 60",
        "SENGO2_CARD_SPEED80": "Speed 80",
        
        // 20类物体
        "SENGO2_CLASS20_AIRPLANE": "Airplane",
        "SENGO2_CLASS20_BICYCLE": "Bicycle",
        "SENGO2_CLASS20_BIRD": "Bird",
        "SENGO2_CLASS20_BOAT": "Boat",
        "SENGO2_CLASS20_BOTTLE": "Bottle",
        "SENGO2_CLASS20_BUS": "Bus",
        "SENGO2_CLASS20_CAR": "Car",
        "SENGO2_CLASS20_CAT": "Cat",
        "SENGO2_CLASS20_CHAIR": "Chair",
        "SENGO2_CLASS20_COW": "Cow",
        "SENGO2_CLASS20_TABLE": "DiningTable",
        "SENGO2_CLASS20_DOG": "Dog",
        "SENGO2_CLASS20_HORSE": "Horse",
        "SENGO2_CLASS20_MOTORBIKE": "Motorbike",
        "SENGO2_CLASS20_PERSON": "Person",
        "SENGO2_CLASS20_PLANT": "PottedPlant",
        "SENGO2_CLASS20_SHEEP": "Sheep",
        "SENGO2_CLASS20_SOFA": "Sofa",
        "SENGO2_CLASS20_TRAIN": "Train",
        "SENGO2_CLASS20_MONITOR": "Tvonitor",
        
        // 视觉算法类型
        "SENGO2_VISION_VISIONCOLOR": "Color",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Line",
        "SENGO2_VISION_VISIONLEARNING": "Learning",
        "SENGO2_VISION_VISIONCARD": "Card",
        "SENGO2_VISION_VISIONFACE": "Face",
        "SENGO2_VISION_VISION20CLASSES": "20Class",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Motion",
        "SENGO2_VISION_VISIONCUSTOM": "Custom",
        
        // 状态值
        "SENGO2_STATE_VALUE_X": "x-coord",
        "SENGO2_STATE_VALUE_Y": "y-coord",
        "SENGO2_STATE_VALUE_WIDTH": "width",
        "SENGO2_STATE_VALUE_HEIGHT": "height",
        "SENGO2_STATE_VALUE_LABEL": "label",
        "SENGO2_STATE_VALUE_R": "red CH value",
        "SENGO2_STATE_VALUE_G": "green CH value",
        "SENGO2_STATE_VALUE_B": "blue CH value",
        
        // 线条检测值
        "SENGO2_STATE_LINE_EX": "x-coord of ending point",
        "SENGO2_STATE_LINE_EY": "y-coord of ending point",
        "SENGO2_STATE_LINE_SX": "x-coord of starting point",
        "SENGO2_STATE_LINE_SY": "y-coord of starting point",
        "SENGO2_STATE_LINE_A": "inclination angle",
        
        // 视觉数据
        "SENGO2_VISION_DATA": "Value"
    });
    
    // 中文简体翻译
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        "SENGO2_CATEGORY": "Sengo2 视觉传感器",
        "SENGO2_SETUP": "设置模块",
        "SENGO2_RUN": "运行模块",
        "SENGO2_BEGIN": "初始化  Sengo2  端口 %1 地址 %2",
        "SENGO2_SET_DEFAULT": "恢复 Sengo2 默认参数",
        "SENGO2_CAMERA_SET_AWB": "设置 Sengo2 白平衡模式 %1",
        "SENGO2_LED_SET_COLOR": "设置  Sengo2  检测到目标时LED显示 %1 否则 %2 亮度(1~15) %3",
        "SENGO2_VISION_SET": "设置  Sengo2  %1  算法 %2",
        "SENGO2_VISION_SET_PARAM_NUM": "设置  Sengo2  %1  %2 组参数",
        "SENGO2_VISION_COLOR_PARAM": "设置  Sengo2  颜色识别  中心横坐标 %1 中心纵坐标 %2 宽度 %3 高度 %4 参数组 %5",
        "SENGO2_VISION_BLOB_PARAM": "设置  Sengo2  色块检测  最小宽度 %1 最小高度 %2 颜色 %3 参数组 %4",
        "SENGO2_VISION_GENERAL_PARAM": "设置 Sengo2 %1 参数1 %2 参数2 %3 参数3 %4 参数4 %5 参数5 %6 参数组 %7",
        "SENGO2_VISION_BLOB_MAX": "设置  Sengo2  色块检测  每种颜色最大可检测数量(1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "设置  Sengo2  标签识别  编码格式 %1",
        "SENGO2_VISION_LINE_MAX": "设置  Sengo2  线条检测  最大可检测数量(1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "设置  Sengo2  %1  %2 编号 %3",
        "SENGO2_VISION_GET_RESULT": "  Sengo2  %1  返回的结果数量",
        "SENGO2_VISION_COLOR_VALUE": "  Sengo2  颜色识别  返回值 %1 结果 %2 的",
        "SENGO2_VISION_GET_VALUE": "  Sengo2  %1  返回值 %2 结果 %3 的",
        "SENGO2_VISION_LINE_VALUE": "  Sengo2  线条检测  返回值 %1 结果 %2 的",
        "SENGO2_VISION_QRCODE_VALUE": "  Sengo2  二维码  返回值 %1 结果 %2 的",
        "SENGO2_VISION_QRCODE_STRING": "  Sengo2  二维码  返回的结果字符串",
        "SENGO2_VISION_CUSTOM_VALUE": "  Sengo2  自定义 返回值 %1 结果 %2 的",
        "SENGO2_VISION_COLOR_LABEL": "  Sengo2  颜色识别  识别到 %1 结果 %2",
        "SENGO2_VISION_BLOB_LABEL": "  Sengo2  色块检测  检测到 %1块 结果 %2",
        "SENGO2_VISION_CARD_LABEL": "  Sengo2  卡片识别  识别到 %1 结果 %2",
        "SENGO2_VISION_CLASS20_LABEL": "  Sengo2  20类物体  识别到 %1 结果 %2",
        
        // 状态
        "SENGO2_ENABLE": "开启",
        "SENGO2_DISABLE": "关闭",
        
        // 白平衡模式
        "SENGO2_AWB_AUTO": "自动",
        "SENGO2_AWB_LOCK": "锁定",
        "SENGO2_AWB_WHITE_LIGHT": "白光",
        "SENGO2_AWB_YELLOW_LIGHT": "黄光",
        "SENGO2_AWB_CALIBRATE": "校准",
        
        // 颜色
        "SENGO2_COLOR_BLACK": "黑色",
        "SENGO2_COLOR_WHITE": "白色",
        "SENGO2_COLOR_RED": "红色",
        "SENGO2_COLOR_GREEN": "绿色",
        "SENGO2_COLOR_BLUE": "蓝色",
        "SENGO2_COLOR_YELLOW": "黄色",
        
        // LED颜色
        "SENGO2_LED_CLOSE": "黑色",
        "SENGO2_LED_RED": "红色",
        "SENGO2_LED_GREEN": "绿色",
        "SENGO2_LED_YELLOW": "黄色",
        "SENGO2_LED_BLUE": "蓝色",
        "SENGO2_LED_PURPLE": "紫色",
        "SENGO2_LED_CYAN": "青色",
        "SENGO2_LED_WHITE": "白色",
        
        // 算法参数操作
        "SENGO2_OPERA_SAVE": "保存数据并",
        "SENGO2_OPERA_DELETE": "删除数据",
        
        // 自定义数据
        "SENGO2_CUSTOM_VALUE1": "数据1",
        "SENGO2_CUSTOM_VALUE2": "数据2",
        "SENGO2_CUSTOM_VALUE3": "数据3",
        "SENGO2_CUSTOM_VALUE4": "数据4",
        "SENGO2_CUSTOM_VALUE5": "数据5",
        
        // 卡片标签
        "SENGO2_CARD_FORWARD": "前进",
        "SENGO2_CARD_LEFT": "左转",
        "SENGO2_CARD_RIGHT": "右转",
        "SENGO2_CARD_TURN_AROUND": "掉头",
        "SENGO2_CARD_PARK": "停车",
        "SENGO2_CARD_GREEN_LIGHT": "绿灯",
        "SENGO2_CARD_RED_LIGHT": "红灯",
        "SENGO2_CARD_SPEED40": "速度40",
        "SENGO2_CARD_SPEED60": "速度60",
        "SENGO2_CARD_SPEED80": "速度80",
        
        // 20类物体
        "SENGO2_CLASS20_AIRPLANE": "飞机",
        "SENGO2_CLASS20_BICYCLE": "自行车",
        "SENGO2_CLASS20_BIRD": "鸟",
        "SENGO2_CLASS20_BOAT": "船",
        "SENGO2_CLASS20_BOTTLE": "瓶子",
        "SENGO2_CLASS20_BUS": "公交车",
        "SENGO2_CLASS20_CAR": "汽车",
        "SENGO2_CLASS20_CAT": "猫",
        "SENGO2_CLASS20_CHAIR": "椅子",
        "SENGO2_CLASS20_COW": "牛",
        "SENGO2_CLASS20_TABLE": "餐桌",
        "SENGO2_CLASS20_DOG": "狗",
        "SENGO2_CLASS20_HORSE": "马",
        "SENGO2_CLASS20_MOTORBIKE": "摩托车",
        "SENGO2_CLASS20_PERSON": "人",
        "SENGO2_CLASS20_PLANT": "盆栽植物",
        "SENGO2_CLASS20_SHEEP": "羊",
        "SENGO2_CLASS20_SOFA": "沙发",
        "SENGO2_CLASS20_TRAIN": "火车",
        "SENGO2_CLASS20_MONITOR": "显示器",
        
        // 视觉算法类型
        "SENGO2_VISION_VISIONCOLOR": "颜色识别",
        "SENGO2_VISION_VISIONBLOB": "色块检测",
        "SENGO2_VISION_VISIONAPRILTAG": "标签识别",
        "SENGO2_VISION_VISIONLINE": "线条检测",
        "SENGO2_VISION_VISIONLEARNING": "深度学习",
        "SENGO2_VISION_VISIONCARD": "卡片识别",
        "SENGO2_VISION_VISIONFACE": "人脸识别",
        "SENGO2_VISION_VISION20CLASSES": "20类物体",
        "SENGO2_VISION_VISIONQRCODE": "二维码",
        "SENGO2_VISION_VISIONMOTIONDETECT": "运动物体",
        "SENGO2_VISION_VISIONCUSTOM": "自定义",
        
        // 状态值
        "SENGO2_STATE_VALUE_X": "横坐标",
        "SENGO2_STATE_VALUE_Y": "纵坐标",
        "SENGO2_STATE_VALUE_WIDTH": "宽度",
        "SENGO2_STATE_VALUE_HEIGHT": "高度",
        "SENGO2_STATE_VALUE_LABEL": "标签",
        "SENGO2_STATE_VALUE_R": "红色通道值",
        "SENGO2_STATE_VALUE_G": "绿色通道值",
        "SENGO2_STATE_VALUE_B": "蓝色通道值",
        
        // 线条检测值
        "SENGO2_STATE_LINE_EX": "终点横坐标",
        "SENGO2_STATE_LINE_EY": "终点纵坐标",
        "SENGO2_STATE_LINE_SX": "起点横坐标",
        "SENGO2_STATE_LINE_SY": "起点纵坐标",
        "SENGO2_STATE_LINE_A": "倾斜角度",
        
        // 视觉数据
        "SENGO2_VISION_DATA": "数据"
    });
    
    // 中文繁体翻译
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        "SENGO2_CATEGORY": "Sengo2 視覺傳感器",
        "SENGO2_SETUP": "設置模塊",
        "SENGO2_RUN": "運行模塊",
        "SENGO2_BEGIN": "初始化  Sengo2  埠口 %1 地址 %2",
        "SENGO2_SET_DEFAULT": "恢復 Sengo2 默認參數",
        "SENGO2_CAMERA_SET_AWB": "設置 Sengo2 白平衡模式 %1",
        "SENGO2_LED_SET_COLOR": "設置  Sengo2  檢測到目標時LED顯示 %1 否則 %2 亮度(1~15) %3",
        "SENGO2_VISION_SET": "設置  Sengo2  %1  算法 %2",
        "SENGO2_VISION_SET_PARAM_NUM": "設置  Sengo2  %1  %2 組參數",
        "SENGO2_VISION_COLOR_PARAM": "設置  Sengo2  顏色識別  中心橫坐標 %1 中心縱坐標 %2 寬度 %3 高度 %4 參數組 %5",
        "SENGO2_VISION_BLOB_PARAM": "設置  Sengo2  色塊檢測  最小寬度 %1 最小高度 %2 顏色 %3 參數組 %4",
        "SENGO2_VISION_GENERAL_PARAM": "設置  Sengo2  %1 參數1 %2 參數2 %3 參數3 %4 參數4 %5 參數5 %6 參數組 %7",
        "SENGO2_VISION_BLOB_MAX": "設置  Sengo2  色塊檢測  每種顏色最大可檢測數量(1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "設置  Sengo2  標籤識別  編碼格式 %1",
        "SENGO2_VISION_LINE_MAX": "設置  Sengo2  線條檢測  最大可檢測數量(1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "設置  Sengo2  %1  %2 編號 %3",
        "SENGO2_VISION_GET_RESULT": "  Sengo2  %1  返回的結果數量",
        "SENGO2_VISION_COLOR_VALUE": "  Sengo2  顏色識別  返回值 %1 結果 %2 的",
        "SENGO2_VISION_GET_VALUE": "  Sengo2  %1  返回值 %2 結果 %3 的",
        "SENGO2_VISION_LINE_VALUE": "  Sengo2  線條檢測  返回值 %1 結果 %2 的",
        "SENGO2_VISION_QRCODE_VALUE": "  Sengo2  二維碼  返回值 %1 結果 %2 的",
        "SENGO2_VISION_QRCODE_STRING": "  Sengo2  二維碼  返回的結果字符串",
        "SENGO2_VISION_CUSTOM_VALUE": "  Sengo2 自定義 返回值 %1 結果 %2 的",
        "SENGO2_VISION_COLOR_LABEL": "  Sengo2  顏色識別  識別到 %1 結果 %2",
        "SENGO2_VISION_BLOB_LABEL": "  Sengo2  色塊檢測  檢測到 %1塊 結果 %2",
        "SENGO2_VISION_CARD_LABEL": "  Sengo2  卡片識別  識別到 %1 結果 %2",
        "SENGO2_VISION_CLASS20_LABEL": "  Sengo2  20類物體  識別到 %1 結果 %2",
        
        // 状态
        "SENGO2_ENABLE": "開啟",
        "SENGO2_DISABLE": "關閉",
        
        // 白平衡模式
        "SENGO2_AWB_AUTO": "自動",
        "SENGO2_AWB_LOCK": "鎖定",
        "SENGO2_AWB_WHITE_LIGHT": "白光",
        "SENGO2_AWB_YELLOW_LIGHT": "黃光",
        "SENGO2_AWB_CALIBRATE": "校準",
        
        // 颜色
        "SENGO2_COLOR_BLACK": "黑色",
        "SENGO2_COLOR_WHITE": "白色",
        "SENGO2_COLOR_RED": "紅色",
        "SENGO2_COLOR_GREEN": "綠色",
        "SENGO2_COLOR_BLUE": "藍色",
        "SENGO2_COLOR_YELLOW": "黃色",
        
        // LED颜色
        "SENGO2_LED_CLOSE": "黑色",
        "SENGO2_LED_RED": "紅色",
        "SENGO2_LED_GREEN": "綠色",
        "SENGO2_LED_YELLOW": "黃色",
        "SENGO2_LED_BLUE": "藍色",
        "SENGO2_LED_PURPLE": "紫色",
        "SENGO2_LED_CYAN": "青色",
        "SENGO2_LED_WHITE": "白色",
        
        // 算法参数操作
        "SENGO2_OPERA_SAVE": "保存數據並",
        "SENGO2_OPERA_DELETE": "刪除數據",
        
        // 自定义数据
        "SENGO2_CUSTOM_VALUE1": "數據1",
        "SENGO2_CUSTOM_VALUE2": "數據2",
        "SENGO2_CUSTOM_VALUE3": "數據3",
        "SENGO2_CUSTOM_VALUE4": "數據4",
        "SENGO2_CUSTOM_VALUE5": "數據5",
        
        // 卡片标签
        "SENGO2_CARD_FORWARD": "前進",
        "SENGO2_CARD_LEFT": "左轉",
        "SENGO2_CARD_RIGHT": "右轉",
        "SENGO2_CARD_TURN_AROUND": "掉頭",
        "SENGO2_CARD_PARK": "停車",
        "SENGO2_CARD_GREEN_LIGHT": "綠燈",
        "SENGO2_CARD_RED_LIGHT": "紅燈",
        "SENGO2_CARD_SPEED40": "速度40",
        "SENGO2_CARD_SPEED60": "速度60",
        "SENGO2_CARD_SPEED80": "速度80",
        
        // 20类物体
        "SENGO2_CLASS20_AIRPLANE": "飛機",
        "SENGO2_CLASS20_BICYCLE": "自行車",
        "SENGO2_CLASS20_BIRD": "鳥",
        "SENGO2_CLASS20_BOAT": "船",
        "SENGO2_CLASS20_BOTTLE": "瓶子",
        "SENGO2_CLASS20_BUS": "公交車",
        "SENGO2_CLASS20_CAR": "汽車",
        "SENGO2_CLASS20_CAT": "貓",
        "SENGO2_CLASS20_CHAIR": "椅子",
        "SENGO2_CLASS20_COW": "牛",
        "SENGO2_CLASS20_TABLE": "餐桌",
        "SENGO2_CLASS20_DOG": "狗",
        "SENGO2_CLASS20_HORSE": "馬",
        "SENGO2_CLASS20_MOTORBIKE": "摩托車",
        "SENGO2_CLASS20_PERSON": "人",
        "SENGO2_CLASS20_PLANT": "盆栽植物",
        "SENGO2_CLASS20_SHEEP": "羊",
        "SENGO2_CLASS20_SOFA": "沙發",
        "SENGO2_CLASS20_TRAIN": "火車",
        "SENGO2_CLASS20_MONITOR": "顯示器",
        
        // 视觉算法类型
        "SENGO2_VISION_VISIONCOLOR": "顏色識別",
        "SENGO2_VISION_VISIONBLOB": "色塊檢測",
        "SENGO2_VISION_VISIONAPRILTAG": "標籤識別",
        "SENGO2_VISION_VISIONLINE": "線條檢測",
        "SENGO2_VISION_VISIONLEARNING": "深度學習",
        "SENGO2_VISION_VISIONCARD": "卡片識別",
        "SENGO2_VISION_VISIONFACE": "人臉識別",
        "SENGO2_VISION_VISION20CLASSES": "20類物體",
        "SENGO2_VISION_VISIONQRCODE": "二維碼",
        "SENGO2_VISION_VISIONMOTIONDETECT": "運動物體",
        "SENGO2_VISION_VISIONCUSTOM": "自定義",
        
        // 状态值
        "SENGO2_STATE_VALUE_X": "橫坐標",
        "SENGO2_STATE_VALUE_Y": "縱坐標",
        "SENGO2_STATE_VALUE_WIDTH": "寬度",
        "SENGO2_STATE_VALUE_HEIGHT": "高度",
        "SENGO2_STATE_VALUE_LABEL": "標籤",
        "SENGO2_STATE_VALUE_R": "紅色通道值",
        "SENGO2_STATE_VALUE_G": "綠色通道值",
        "SENGO2_STATE_VALUE_B": "藍色通道值",
        
        // 线条检测值
        "SENGO2_STATE_LINE_EX": "終點橫坐標",
        "SENGO2_STATE_LINE_EY": "終點縱坐標",
        "SENGO2_STATE_LINE_SX": "起點橫坐標",
        "SENGO2_STATE_LINE_SY": "起點縱坐標",
        "SENGO2_STATE_LINE_A": "傾斜角度",
        
        // 视觉数据
        "SENGO2_VISION_DATA": "數據"
    });
    
    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerBlocksMessages; 