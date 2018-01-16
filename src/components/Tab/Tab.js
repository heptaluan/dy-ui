export default {
    name: "dy-tab",
    data() {
        return {
            navActiveIndex: 0,
            lists: [],
            listActiveIndex: 0
        }
    },
    props: {
        vertical: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        computedClass() {
            return this.vertical ? "dy-tab-vertical" : "dy-tab"
        },
    },
    methods: {
        navClickHandle(index, list) {
            // list 为当前对应 index 的 TablList 组件
            if (index === this.navActiveIndex) {
                return;
            }

            // 用 _uid 保存对应的 index
            this.navActiveIndex = index;
            this.listActiveIndex = list._uid;
            this.$emit("tab-click", list.label || index)
        },
        renderList(vNode) {
            // vNode 就是过滤出来的 list 组件
            if (this.lists.length === 0) {
                this.listActiveIndex = vNode._uid;
            }
            
            this.lists.push(vNode);
            
            if (vNode.active) {
                this.navClickHandle(this.lists.length - 1, vNode)
            }

            // 标题
            if (vNode.$slots.label) {
                this.$slots[vNode._uid] = vNode.$slots.label;
            }
        }
    },
    render(h) {
        const { computedClass, $slots, lists, navActiveIndex } = this;

        return (
            <div class={ computedClass }>
                <ul class="dy-tab-nav">
                    <div class="tab-active-bar"></div>
                    {
                        // 渲染导航栏，显示文本从 list 组件的 label 属性中拿
                        lists.map( (list, index) => {
                            return (
                                <li key={index} class={{"dy-tab-active": index === navActiveIndex}} onClick={ _ => this.navClickHandle(index, list)}>
                                    { list.label || list.$slots.label}
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 列表插槽使用 TabList 组件 */}
                <div class="dy-tab-lists">
                    { $slots.default }
                </div>
            </div>
        )
    }
}