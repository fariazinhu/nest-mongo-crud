import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { ItemsService } from './items.service';
  import { CreateItemDto } from './dto/create-item.dto';
  import { UpdateItemDto } from './dto/update-item.dto';
  import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
  
  @UseGuards(JwtAuthGuard)
  @Controller('items')
  export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
  
    @Post()
    create(@Body() dto: CreateItemDto) {
      return this.itemsService.create(dto);
    }
  
    @Get()
    findAll() {
      return this.itemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.itemsService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateItemDto) {
      return this.itemsService.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.itemsService.remove(id);
    }
  }