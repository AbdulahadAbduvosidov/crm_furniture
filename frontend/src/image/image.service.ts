import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Image } from './models/image.model';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image) private imageRepository: typeof Image,
    private readonly jwtService: JwtService,
  ) {}

  async createFile(images: Express.Multer.File[]) {
    try {
      const fileNames: string[] = [];
      for (let i = 0; i < images.length; i++) {
        const fileName = (await this.generateUniqueFileName()) + '.jpg';
        const filePath = path.resolve(__dirname, '..', 'static');
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        fs.writeFileSync(path.join(filePath, fileName), images[i].buffer);
        fileNames.push(fileName);
      }
      return fileNames;
    } catch (error) {
      throw new HttpException(
        'Error with uploading images',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async removeFile(fileName) {
    try {
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.rmSync(path.join(filePath, fileName));
      return fileName;
    } catch (error) {
      throw new HttpException(
        'Error with deleting images',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async generateFileName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const prefix =
      letters.charAt(Math.floor(Math.random() * letters.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length));
    const suffix = Math.floor(Math.random() * 90000) + 10000;
    return prefix + suffix;
  }

  async generateUniqueFileName() {
    const allUniqueFileNames = await this.imageRepository.findAll({
      attributes: ['file_name'],
    });
    let file_name: any;
    while (true) {
      file_name = await this.generateFileName();
      if (!allUniqueFileNames.includes(file_name)) {
        break;
      }
    }
    return file_name;
  }
}
