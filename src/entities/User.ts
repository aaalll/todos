import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  constructor() {
    this.name = '';
    this.createdAt = new Date();
  }
  @PrimaryGeneratedColumn('increment')
  public id!:number;

  @Column()
  public name: string;

  @Column()
  public createdAt: Date;
}
