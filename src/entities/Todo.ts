import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from '../models/TaskStatus';

@Entity()
export default class Todo {
  constructor() {
    this.status = TaskStatus.OPEN;
    this.userId = 0;
    this.title = '';
    this.createdAt = new Date();
  }
  @PrimaryGeneratedColumn('increment')
  public id!:number;

  @Column()
  public userId: number;

  @Column()
  public title: string;

  @Column()
  public status: TaskStatus;

  @Column()
  public createdAt: Date;
}
