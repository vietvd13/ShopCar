<template>
  <div class="profile container">
    <div class="mx-3">
      <div class="profile card">
        <div class="card-body font-normal">
          <div>
            <b-row class="mb-3 d-block align-items-center d-sm-flex">
              <b-col cols="4" md="2">
                <h6>Họ và tên</h6>
              </b-col>
              <b-col>
                <b-input placeholder="Vui lòng nhập họ và tên"></b-input>
              </b-col>
            </b-row>

            <b-row class="mb-3 d-block align-items-center d-sm-flex">
              <b-col cols="4" md="2">
                <h6>Ngày sinh</h6>
              </b-col>
              <b-col>
                <b-form-datepicker id="example-datepicker"></b-form-datepicker>
              </b-col>
            </b-row>


            <b-row class="mb-3 d-block align-items-center d-sm-flex">
              <b-col cols="4" md="2">
                <h6>Địa chỉ email</h6>
              </b-col>
              <b-col>
                <b-input readonly placeholder="Vui lòng nhập địa chỉ email"></b-input>
              </b-col>
            </b-row>

            <b-row class="mb-3 d-block align-items-center d-sm-flex">
              <b-col cols="4" md="2">
                <h6>Số điện thoại</h6>
              </b-col>
              <b-col>
                <b-input placeholder="Vui lòng nhập số điện thoại"></b-input>
              </b-col>
            </b-row>

            <b-row class="mb-3 d-block align-items-center d-sm-flex">
              <b-col cols="4" md="2">
                <h6>Địa chỉ</h6>
              </b-col>
              <b-col>
                <b-input placeholder="Vui lòng nhập địa chỉ"></b-input>
              </b-col>
            </b-row>

            <b-row class="mb-3 d-block align-items-center d-sm-flex">
              <b-col cols="4" md="2">
                <h6>Giới tính</h6>
              </b-col>
              <b-col>
                <b-form-select value="male">
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </b-form-select>
              </b-col>
            </b-row>

          </div>
        </div>

        <div class="my-3 border-top"></div>

        <div class="card-header header-elements-sm-inline">
          <h6 class="card-title font-normal font-superBold">Cài đặt khác</h6>
        </div>
        <div class="card-body font-normal">
          <div>
            <div>
              <div class="row d-block align-items-center d-sm-flex mb-2">
                <div class="col-4 col-md-2 py-2">
                  <h6>Ngôn ngữ</h6>
                </div>
                <b-col>
                  <b-form-select value="vi">
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">Tiếng Anh</option>
                    <option value="kr">Tiến Hàn</option>
                  </b-form-select>
                </b-col>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
              <b-button variant="outlined" class=" mr-2 border" id="btn-cancel">
                Huỷ
              </b-button>
              <b-button class="btn-app">
                Lưu
              </b-button>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "ProfilePage",
}
</script>

<style lang="scss" scoped>

</style>>
