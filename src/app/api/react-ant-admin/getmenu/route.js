import { NextResponse } from "next/server";

export async function GET() {

    let data = [
        {
          "MENU_TITLE": "列表页",
          "MENU_PATH": "/list",
          "MENU_KEY": 9,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_list",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 1,
        },
        {
          "MENU_TITLE": "卡片列表",
          "MENU_PATH": "/card",
          "MENU_KEY": 10,
          "MENU_PARENTKEY": 9,
          "MENU_ICON": null,
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 5485,
        },
        {
          "MENU_TITLE": "查询列表",
          "MENU_PATH": "/search",
          "MENU_KEY": 11,
          "MENU_PARENTKEY": 9,
          "MENU_ICON": null,
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 9588,
        },
        {
          "MENU_TITLE": "表单页",
          "MENU_PATH": "/form",
          "MENU_KEY": 7,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_form",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 3,
        },
        {
          "MENU_TITLE": "基础表单",
          "MENU_PATH": "/index",
          "MENU_KEY": 6,
          "MENU_PARENTKEY": 7,
          "MENU_ICON": null,
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 9654,
        },
        {
          "MENU_TITLE": "详情页",
          "MENU_PATH": "/details",
          "MENU_KEY": 1,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_edit",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 3,
        },
        {
          "MENU_TITLE": "个人中心",
          "MENU_PATH": "/person",
          "MENU_KEY": 2,
          "MENU_PARENTKEY": 1,
          "MENU_ICON": "icon_infopersonal",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 9998,
        },
        {
          "MENU_TITLE": "结果页",
          "MENU_PATH": "/result",
          "MENU_KEY": 16,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_voiceprint",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 4,
        },
        {
          "MENU_TITLE": "403",
          "MENU_PATH": "/403",
          "MENU_KEY": 3,
          "MENU_PARENTKEY": 16,
          "MENU_ICON": "icon_locking",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 0,
        },
        {
          "MENU_TITLE": "404",
          "MENU_PATH": "/404",
          "MENU_KEY": 4,
          "MENU_PARENTKEY": 16,
          "MENU_ICON": "icon_close",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 1,
        },
        {
          "MENU_TITLE": "500",
          "MENU_PATH": "/500",
          "MENU_KEY": 5,
          "MENU_PARENTKEY": 16,
          "MENU_ICON": "icon_privacy_closed",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 4568,
        },
        {
          "MENU_TITLE": "统计",
          "MENU_PATH": "/statistics",
          "MENU_KEY": 17,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_MTR",
          "MENU_KEEPALIVE": "true",
          "MENU_ORDER": 5,
        },
        {
          "MENU_TITLE": "访客统计",
          "MENU_PATH": "/visitor",
          "MENU_KEY": 18,
          "MENU_PARENTKEY": 17,
          "MENU_ICON": "icon_addresslist",
          "MENU_KEEPALIVE": "true",
          "MENU_ORDER": 1,
        },
        {
          "MENU_TITLE": "系统管理",
          "MENU_PATH": "/power",
          "MENU_KEY": 12,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_set",
          "MENU_KEEPALIVE": "false",
          "MENU_ORDER": 9,
        },
        {
          "MENU_TITLE": "权限类别",
          "MENU_PATH": "/type",
          "MENU_KEY": 14,
          "MENU_PARENTKEY": 12,
          "MENU_ICON": "icon_safety",
          "MENU_KEEPALIVE": "true",
          "MENU_ORDER": 12,
        },
        {
          "MENU_TITLE": "菜单管理",
          "MENU_PATH": "/menu",
          "MENU_KEY": 13,
          "MENU_PARENTKEY": 12,
          "MENU_ICON": "icon_menu",
          "MENU_KEEPALIVE": "true",
          "MENU_ORDER": 1475,
        },
        {
          "MENU_TITLE": "用户管理",
          "MENU_PATH": "/user",
          "MENU_KEY": 15,
          "MENU_PARENTKEY": 12,
          "MENU_ICON": "icon_infopersonal",
          "MENU_KEEPALIVE": "true",
          "MENU_ORDER": 1593,
        },
        {
          "MENU_TITLE": "图标库",
          "MENU_PATH": "/icons",
          "MENU_KEY": 8,
          "MENU_PARENTKEY": null,
          "MENU_ICON": "icon_pen",
          "MENU_KEEPALIVE": "true",
          "MENU_ORDER": 10,
        },
    ];

    return NextResponse.json(data);
    
}