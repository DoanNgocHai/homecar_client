<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Lịch sử giao dịch mua xe

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        label="Search"
        single-line
        flat
        hide-details
        variant="solo-filled"
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items_buyer" :headers="headers" class="pa-5">
      <template v-slot:header.id>
        <div class="header_title">ID</div>
      </template>
      <template v-slot:header.car.title>
        <div class="header_title">Tên xe</div>
      </template>
      <template v-slot:header.car.user.name>
        <div class="header_title">Người bán</div>
      </template>
      <template v-slot:header.car.price>
        <div class="header_title">Price</div>
      </template>
      <template v-slot:header.buyer_status>
        <div class="header_title">Buyer Status</div>
      </template>
      <template v-slot:header.seller_status>
        <div class="header_title">Seller Status</div>
      </template>
      <template v-slot:header.status>
        <div class="header_title">Status</div>
      </template>
      <template v-slot:header.actions>
        <div class="header_title">Action</div>
      </template>
      <template v-slot:item.buyer_status="{ item }">
        <div>
          <v-chip
            :color="getChipColor(item.buyer_status)"
            :text="getChipText(item.buyer_status)"
            class="text-uppercase"
            label
            size="small"
          ></v-chip>
        </div>
      </template>
      <template v-slot:item.seller_status="{ item }">
        <div>
          <v-chip
            :color="getChipColor(item.seller_status)"
            :text="getChipText(item.seller_status)"
            class="text-uppercase"
            label
            size="small"
          ></v-chip>
        </div>
      </template>
      <template v-slot:item.status="{ item }">
        <div>
          <v-chip
            :color="getChipColorTran(item.status)"
            :text="getChipTextTran(item.status)"
            class="text-uppercase"
            label
            size="small"
          ></v-chip>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{ item } " >
        <v-icon
          small
          class="mr-2"
          @click="dialogBuyer(item)"
        >
          mdi-file-document-edit-outline
        </v-icon>
      </template>    
    </v-data-table>
  </v-card>

  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Lịch sử giao dịch bán xe

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        label="Search"
        single-line
        flat
        hide-details
        variant="solo-filled"
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items_seller" :headers="headers" class="pa-5">
      <template v-slot:header.id>
        <div class="header_title">ID</div>
      </template>
      <template v-slot:header.car.title>
        <div class="header_title">Tên xe</div>
      </template>
      <template v-slot:header.car.user.name>
        <div class="header_title">Người bán</div>
      </template>
      <template v-slot:header.car.price>
        <div class="header_title">Price</div>
      </template>
      <template v-slot:header.buyer_status>
        <div class="header_title">Buyer Status</div>
      </template>
      <template v-slot:header.seller_status>
        <div class="header_title">Seller Status</div>
      </template>
      <template v-slot:header.status>
        <div class="header_title">Status</div>
      </template>
      <template v-slot:header.actions>
        <div class="header_title">Action</div>
      </template>

      <template v-slot:item.buyer_status="{ item }">
        <div>
          <v-chip
            :color="getChipColor(item.buyer_status)"
            :text="getChipText(item.buyer_status)"
            class="text-uppercase"
            label
            size="small"
          ></v-chip>
        </div>
      </template>
      <template v-slot:item.seller_status="{ item }">
        <div>
          <v-chip
            :color="getChipColor(item.seller_status)"
            :text="getChipText(item.seller_status)"
            class="text-uppercase"
            label
            size="small"
          ></v-chip>
        </div>
      </template>
      <template v-slot:item.status="{ item }">
        <div>
          <v-chip
            :color="getChipColorTran(item.status)"
            :text="getChipTextTran(item.status)"
            class="text-uppercase"
            label
            size="small"
          ></v-chip>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{ item } " >
        <v-icon
          small
          class="mr-2"
          @click="dialogSeller1(item)"
        >
          mdi-file-document-edit-outline
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item.id)"
        >
          mdi-delete
        </v-icon>
                
      </template>    
    </v-data-table>
  </v-card>
  <v-dialog width="500" v-model="dialogConfirmSeller" >
    <v-card v-show="confirmedSale == 1" title="Xác nhận bán xe">
      <v-card-text>
        Bạn có muốn bán chiếc xe này không?
      </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="dialogConfirmSeller = false"
          >
            Từ chối bán
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="confirmSeller()"
          >
            Xác nhận bán
          </v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-show="confirmedSale == 2" title="Cập nhật trạng thái">
      <v-card-text>
        Vui lòng cập nhật trạng thái giao dịch
      </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="dialogConfirmSeller = false"
          >
            Giao dịch thất bại
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="confirmSeller()"
          >
            Giao dịch hoàn tất
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog width="500" v-model="dialogConfirmBuyer" >
    <v-card title="Cập nhật trạng thái">
      <v-card-text>
        Vui lòng cập nhật trạng thái giao dịch
      </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="dialogConfirmSeller = false"
          >
            Giao dịch thất bại
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="confirmSeller()"
          >
            Giao dịch hoàn tất
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- {{ brands }} -->
</template>
<script>
import { listHistoryTransactionBuyer, listHistoryTransactionSeller, confirmSale } from '../../apis/transaction/transaction';
import { useToast } from "vue-toastification";
import { useStore,mapGetters } from 'vuex';
import { updateCar } from '../../apis/user/car';
import { uploadFile } from '../../apis/common/upload-file'
  export default {
    data () {
      const toast = useToast();
      return {
        loading: false,
        toast,
        data: [],
        search: '',
        dialogConfirmSeller: false,
        dialogEdit: false,
        dialogConfirmBuyer: false,
        items: [],

        items_buyer: [],
        items_seller: [],
        idTran:'',
        confirmedSale:'',
        headers: [
          {
            text: 'No',
            value:'id'

          }, 
          {
            text: 'Name Car',
            value: 'car.title',
            width: "200"
            

          }, 
          {
            text: 'Name Seller',
            value:'car.user.name'
          }, 
          {
            text: 'Price',
            value: 'car.price',
          },
          { text: 'Buyer Status', value: 'buyer_status' },
          { text: 'Seller Status', value: 'seller_status' },

          { text: 'Status', value: 'status' },

          { text: 'Action', value: 'actions', sortable: false },
        ],
      }
    },
    watch: {

    },
    created(){
      this.getDataBuyer();
      this.getDataSeller();

    },
    methods: {

      async getDataBuyer() {
        const data = await listHistoryTransactionBuyer();
        if (data) {
          this.items_buyer = data;
        }
      },
      async getDataSeller() {
        const data = await listHistoryTransactionSeller();
        if (data) {
          this.items_seller = data;
        }
      },

 
      async deleteItemConfirm () {
        
        try {
          const data = await deleteCar(this.idCar);
          if (data) {
            this.getData();
            this.dialogDelete = false
            this.toast.success("Xoá thành công");
            
          }
        } catch (error) {
          this.toast.success("Xoá dữ liệu thất bại");
        }
      },
      deleteItem (id) {
        this.idCar = id
        this.dialogDelete = true
      },
      close () {
        this.dialog = false
      },

      closeDelete () {
        this.dialogDelete = false
      },
      getChipColor(status) {
        if (status === 2) {
          return 'green';
        } else if (status === 3) {
          return 'red'; 
        } else {
          return 'grey';
        }
      },
      getChipText(status) {
        if (status === 2) {
          return 'Đã xác nhận mua';
        } else if (status === 3) {
          return 'Từ chối mua';
        } else {
          return 'Đợi confirm';
        }
      },
      getChipColorTran(status) {
        if (status === 2) {
          return 'grey';
        } else if (status === 3) {
          return 'green'; 
        } else if (status === 4) {
          return 'red'; 
        }else {
          return 'grey';
        }
      },
      getChipTextTran(status) {
        if (status === 2) {
          return 'Đang giao dịch';
        }
        else if (status === 3) {
          return 'Giao dịch hoàn tất';
        } else if (status === 4) {
          return 'Đã hủy giao dịch';
        } else {
          return 'Đợi Confirm';
        }
      },
      dialogSeller1(item) {
        this.idTran = item;
        this.dialogConfirmSeller = !this.dialogConfirmSeller;
        if (this.idTran.status == 1) {
          this.confirmedSale = 1;
        } else {
          this.confirmedSale = 2;
        }
      },
      dialogBuyer(item) {
        this.dialogConfirmBuyer = !this.dialogConfirmBuyer;
        console.log(item.id);
      },

      async confirmSeller() {
          console.log(this.idTran.id);

        try {
          const data = await confirmSale(this.idTran.id);
          this.toast.success("Đã cập nhật giao dịch");
        } catch (error) {
          // Xử lý lỗi một cách thích hợp, ví dụ in ra console
          this.toast.error("Cập nhật hồ sơ thất bại!!");
        }
      }
    },
    computed: {
      ...mapGetters(['brands','figures','gears','colors']),
    },
  }
</script>
<style scoped>
.header_title{
  font-size: 18px;
    font-weight: 600;
}
</style>