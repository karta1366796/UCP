<template>
  <!-- top part -->
  <div class="flex flex-column">
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card mb-0 p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >CPU
              <div class="text-900 text-xl font-medium mt-3">20%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-green-500 font-medium">20</span>
          <span class="text-500">/100</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card mb-0 p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >Memory
              <div class="text-pink-500 text-xl font-medium mt-3">120%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-pink-500 font-medium">120</span>
          <span class="text-500">/100 GB</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card mb-0 p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >Volume
              <div class="text-orange-500 text-xl font-medium mt-3">60%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-orange-500 font-medium">60.3</span>
          <span class="text-500">/100 TB</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card mb-0 p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >GPU
              <div class="text-900 text-xl font-medium mt-3">0%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-green-500 font-medium">0</span>
          <span class="text-500">/2</span>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >CPU(Container)
              <div class="text-900 text-xl font-medium mt-3">20%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-green-500 font-medium">20</span>
          <span class="text-500">/100 m</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >Memory(Container)
              <div class="text-pink-500 text-xl font-medium mt-3">120%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-pink-500 font-medium">120</span>
          <span class="text-500">/100 Gi</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >Volume(Container)
              <div class="text-orange-500 text-xl font-medium mt-3">60%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-orange-500 font-medium">60.3</span>
          <span class="text-500">/100 G</span>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3 p-3">
        <div class="card p-3">
          <div class="flex justify-content-between mb-3">
            <span class="text-500 font-medium"
              >GPU(Container)
              <div class="text-900 text-xl font-medium mt-3">0%</div></span
            >
            <div><Avatar class="bg-blue-100" icon="pi pi-search" /></div>
          </div>
          <span class="text-green-500 font-medium">0</span>
          <span class="text-500">/2</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap">
    <!-- left part -->
    <div class="col-12 lg:col-8">
      <div class="card">
        <h5 class="flex">
          <Avatar class="p-avatar-circle bg-blue-100 my-auto mr-2"
            ><span class="material-symbols-outlined text-base"> description </span></Avatar
          >

          <span class="font-semibold my-auto">專案列表 </span>
          <button class="p-button text-lg ml-auto" type="button"><span class="mr-2">+</span>申請專案</button>
        </h5>
        <TreeTable :value="nodes" sortMode="single">
          <Column field="name" header="組織" :expander="true" :sortable="true"></Column>
          <Column field="size" header="名稱" :sortable="true"></Column>
          <Column field="price" header="目前花費" :sortable="true"
            ><template #body="solt"> ${{ solt.node.data.price }}.00 </template>
          </Column>

          <Column field="module" header="模組" :sortable="true"></Column>
        </TreeTable>
      </div>
    </div>
    <!-- right part -->
    <div class="col-12 lg:col-4">
      <div class="card">
        <div class="flex">
          <div class="flex flex-column">
            <div class="bg-teal-100 flex justify-content-center align-items-center border-circle leftcricle">
              <span class="material-symbols-outlined text-xl"> description </span>
            </div>

            <div class="bg-teal-100 h-full mx-auto leftline"></div>
          </div>
          <div class="flex flex-column pl-2 w-full">
            <h5 class="mt-2 text-900 font-bold">待辦事項</h5>
            <div class="flex">
              <span class="text-900 font-bold text-xl"
                >專案審核
                <div class="flex text-sm font-medium text-600">
                  <div class="p-3">待簽核2件</div>
                  <div class="p-3">送審中1件</div>
                  <div class="p-3">待簽核0件</div>
                </div></span
              >
              <div class="ml-auto">
                <Button icon="pi pi-ellipsis-v " class="p-button-text p-button-rounded mt-5" />
              </div>
            </div>
            <Divider />
            <div class="flex">
              <span class="text-900 font-bold text-xl"
                >設備審核
                <div class="flex text-sm font-medium text-600">
                  <div class="p-3">待簽核0件</div>
                  <div class="p-3">送審中3件</div>
                  <div class="p-3">待簽核2件</div>
                </div></span
              >
              <div class="ml-auto">
                <Button icon="pi pi-ellipsis-v " class="p-button-text p-button-rounded mt-5" />
              </div>
            </div>
            <Divider />
            <div class="flex flex-row-reverse">
              <Button label="其他..." class="p-button-outlined text-teal-500 w-6 mt-4" />
            </div>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="flex flex-column">
            <div class="bg-indigo-100 flex justify-content-center align-items-center border-circle leftcricle">
              <span class="material-symbols-outlined text-xl"> description </span>
            </div>

            <div class="bg-indigo-100 h-full mx-auto leftline"></div>
          </div>
          <div class="flex flex-column pl-2">
            <h5 class="mt-2 text-900 font-bold">最新公告</h5>
            <div class="flex flex-column">
              <div class="flex text-900 font-medium mb-2">Aenean euismod elementum</div>
              <div class="flex text-600 line-height-3">
                Vitae turpis massa sed elementum tempus egestas sed sed risus. In metus vulputate eu scelerisque felis
                imperdiet proin.
              </div>
            </div>
            <Divider />
            <div class="flex flex-column">
              <div class="flex text-900 font-medium mb-2">In iaculis nunc sed augue lacus</div>
              <div class="flex text-600 line-height-3">
                Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Elementum eu
                facilisis sed odio morbi.
              </div>
            </div>
            <Divider />
            <div class="flex flex-column">
              <div class="flex text-900 font-medium mb-2">Proin sagittis nisl rhoncus</div>
              <div class="flex text-600 line-height-3">
                In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis
                ullamcorper.
              </div>
            </div>
            <Divider />
            <div class="flex flex-row-reverse">
              <Button label="查看全部公告" class="p-button-outlined w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import NodeService from '../service/NodeService';

export default {
  setup() {
    onMounted(() => {
      nodeService.value.getProudctsNodes().then((data) => (nodes.value = data));
    });

    const formatCurrency = (value) => {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const nodes = ref();
    const nodeService = ref(new NodeService());

    return { nodes, nodeService, formatCurrency };
  }
};
</script>

<style scoped>
.leftline {
  width: 2px;
}
.leftcricle {
  min-width: 2.5rem;
  min-height: 2.5rem;
}
</style>
