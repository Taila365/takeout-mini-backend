package com.takeout.utils;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "统一返回结果")
public class Result<T> {
    @Schema(description = "响应码 200成功 500失败")
    private Integer code;
    @Schema(description = "响应信息")
    private String msg;
    @Schema(description = "响应数据")
    private T data;

    // 成功
    public static <T> Result<T> success() {
        return success(null);
    }
    public static <T> Result<T> success(T data) {
        Result<T> r = new Result<>();
        r.setCode(200);
        r.setMsg("操作成功");
        r.setData(data);
        return r;
    }

    // 失败
    public static <T> Result<T> error(String msg) {
        Result<T> r = new Result<>();
        r.setCode(500);
        r.setMsg(msg);
        r.setData(null);
        return r;
    }
}