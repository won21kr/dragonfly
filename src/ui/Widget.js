/**
 * 控件基类
 *
 * @ignore
 * @author Ricky
 */
define(function(require) {
    var _ = require('underscore').noConflict(),
        base = require('base/base'),
        Event = require('event/Event'),
        EventTarget = require('event/EventTarget');

    /**
     * 控件基类
     *
     * @extends EventTarget
     * @constructor
     * @param {Object} [options] 初始化参数
     */
    function Widget(options) {
        //生命阶段
        this.inited = false;
        this.rendered = false;
        this.destroyed = false;

        //初始化参数
        this.initOptions(options);

        //初始化状态
        this.initStates();

        //主元素
        this.main = this.createMain();

        //id
        this.id = base.guid();

        //初始化绘制函数
        this.initPainters();

        this.inited = true;
    }

    Widget.prototype = {
        /**
         * 初始化参数（子类重写）
         *
         * @param {Object} [options] 初始化参数
         * @protected
         */
        initOptions: function(options) {
            this.options = _.extend({}, options || {});
        },

        /**
         * 初始化控件状态
         *
         * @protected
         */
        initStates: function() {
            this.states = {};
            if (typeof this.options.disabled !== 'undefined') {
                this.states.disabled = this.options.disabled;
            }
            if (typeof this.options.hidden !== 'undefined') {
                this.states.hidden = this.options.hidden;
            }
        },

        /**
         * 创建主元素（子类重写）
         *
         * @return {HTMLElement} HTML元素
         * @protected
         */
        createMain: function() {
            return document.createElement('div');
        },

        /**
         * 初始化绘制函数（子类重写）
         *
         * @protected
         */
        initPainters: function() {
            this.painters = {};
        },

        /**
         * 渲染main元素
         *
         * @protected
         */
        renderMain: function() {
            if (!this.rendered) {
                //添加id和class
                base.attr(this.main, {did: this.id});
                base.addClass(this.main, 'df-widget');
                //初始化元素（子类实现）
                this.initElements();
                //绑定事件（子类实现）
                this.initEvents();
                //渲染
                this.repaint(this.options);
                //初始化扩展
                this.initExtensions();

                this.rendered = true;
            }
        },

        /**
         * 渲染到某元素中
         *
         * @param {HTMLElement|String} [target] HTML元素或其id
         */
        appendTo: function(target) {
            if (!this.rendered) {
                //将主元素插入文档
                this.appendMain(target);
                //初始化元素（子类实现）
                this.initElements();
                //绑定事件（子类实现）
                this.initEvents();
                //渲染
                this.repaint(this.options);
                //初始化扩展
                this.initExtensions();

                this.rendered = true;
            }
        },

        /**
         * 将主元素插入文档
         *
         * @param {HTMLElement|String} [target] HTML元素或其id
         * @protected
         */
        appendMain: function(target) {
            var container = base.g(target) || document.body;
            container.appendChild(this.main);
            //添加通用class
            base.addClass(this.main, 'df-widget');
            //添加id
            this.main.id = this.id;
        },

        /**
         * 初始化元素（子类实现）
         *
         * @protected
         * @abstract
         */
        initElements: function() {},

        /**
         * 绑定事件（子类实现）
         *
         * @protected
         * @abstract
         */
        initEvents: function() {},

        /**
         * 重绘
         *
         * @param {Object} changes 更改的属性
         * @protected
         */
        repaint: function(changes) {
            _.each(_.extend({}, changes), function(value, key) {
                var painter = this.painters[key];
                if (painter) {
                    painter.call(this, value);
                }
            }, this);
        },

        /**
         * 初始化扩展
         *
         * @protected
         */
        initExtensions: function() {
            var extensions = this.options.extensions;
            if (!_.isArray(extensions)) {
                extensions = this.options.extensions = [];
            }

            _.each(extensions, function(extension) {
                extension.target = this;
                extension.main = this.main;
                extension.init();
            }, this);
        },

        /**
         * 设置配置项
         *
         * @param {Object} options 参数
         * @protected
         */
        setOptions: function(options) {
            if (this.options) {
                var changes = {};
                _.each(options, function(value, key) {
                    if (value !== this.options[key]) {
                        changes[key] = this.options[key] = value;
                    }
                }, this);

                if (!_.isEmpty(changes)) {
                    this.repaint(changes);
                }
            }
        },

        /**
         * 获取控件参数值
         *
         * @param {String} name 参数名
         * @return {*} 参数值
         * @protected
         */
        get: function(name) {
            return this.options ? this.options[name] : null;
        },

        /**
         * 设置控件参数值
         *
         * @param {String} name 参数名
         * @param {*} value 参数值
         * @protected
         */
        set: function(name, value) {
            var option = {};
            option[name] = value;
            this.setOptions(option);
        },

        /**
         * 是否处于某状态
         *
         * @param {String} state 状态名
         * @return {Boolean}
         * @protected
         */
        hasState: function(state) {
            return this.states ? !!this.states[state] : false;
        },

        /**
         * 添加控件状态
         *
         * @param {String} state 状态名
         * @protected
         */
        addState: function(state) {
            if (!this.hasState(state)) {
                this.states[state] = true;
                var option = {};
                option[state] = true;
                this.setOptions(option);
            }
        },

        /**
         * 移除控件状态
         *
         * @param {String} state 状态名
         * @protected
         */
        removeState: function(state) {
            if (this.hasState(state)) {
                this.states[state] = false;
                var option = {};
                option[state] = false;
                this.setOptions(option);
            }
        },

        /**
         * 启用控件
         */
        enable: function() {
            if (this.states) {
                this.removeState('disabled');
            }
        },

        /**
         * 禁用控件
         */
        disable: function() {
            if (this.states) {
                this.addState('disabled');
            }
        },

        /**
         * 控件是否禁用
         *
         * @return {Boolean}
         */
        isDisabled: function() {
            return this.hasState('disabled');
        },

        /**
         * 显示控件
         *
         * @fires onbeforeshow
         * @fires onaftershow
         */
        show: function() {
            if (this.states) {
                /**
                 * 显示前触发
                 * @event onbeforeshow
                 * @param {Event} e 事件对象
                 */
                this.fire('beforeshow');

                this.removeState('hidden');

                /**
                 * 显示后触发
                 * @event onaftershow
                 * @param {Event} e 事件对象
                 */
                this.fire('aftershow');
            }
        },

        /**
         * 隐藏控件
         *
         * @fires onbeforehide
         * @fires onafterhide
         */
        hide: function() {
            if (this.states) {
                /**
                 * 隐藏前触发
                 * @event onbeforehide
                 * @param {Event} e 事件对象
                 */
                this.fire('beforehide');

                this.addState('hidden');

                /**
                 * 隐藏后触发
                 * @event onafterhide
                 * @param {Event} e 事件对象
                 */
                this.fire('afterhide');
            }
        },

        /**
         * 切换控件显隐状态
         */
        toggle: function() {
            this[this.isHidden() ? 'show' : 'hide']();
        },

        /**
         * 控件是否隐藏
         *
         * @return {Boolean}
         */
        isHidden: function() {
            return this.hasState('hidden');
        },

        /**
         * 销毁控件
         */
        destroy: function() {
            if (!this.destroyed) {
                //解绑事件（子类实现）
                this.destroyEvents();
                //销毁扩展
                this.destroyExtensions();
                //移除主元素（子类重写）
                this.removeMain();
                //移除其他元素（子类实现）
                this.removeElements();

                //清除属性
                this.options = null;
                this.states = null;
                this.painters = null;
                this.main = null;
                this.id = null;
                delete this.options;
                delete this.states;
                delete this.painters;
                delete this.main;
                delete this.id;
                //清除其他属性（子类实现）
                this.removeProp();

                //销毁事件队列
                this.off();

                //清除直接挂载的事件
                _.each(this, function(value, key) {
                    if (_.isFunction(value) && key.indexOf('on') === 0) {
                        this[key] = null;
                        delete this[key];
                    }
                }, this);

                this.destroyed = true;
            }
        },

        /**
         * 解绑事件（子类实现）
         *
         * @protected
         * @abstract
         */
        destroyEvents: function() {},

        /**
         * 销毁扩展
         *
         * @protected
         */
        destroyExtensions: function() {
            var extensions = this.options.extensions;
            _.each(extensions, function(extension, index) {
                extension.destroy();
                extensions[index] = null;
            });
        },

        /**
         * 移除主元素（子类重写）
         *
         * @protected
         */
        removeMain: function() {
            base.remove(this.main);
        },

        /**
         * 移除其他元素（子类实现）
         *
         * @protected
         * @abstract
         */
        removeElements: function() {},

        /**
         * 清除其他属性（子类实现）
         *
         * @protected
         * @abstract
         */
        removeProp: function() {}
    };

    //获得事件处理功能
    base.inherit(Widget, EventTarget);

    return Widget;
});
